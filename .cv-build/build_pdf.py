# -*- coding: utf-8 -*-
"""Gera um curriculo .pdf limpo (texto selecionavel / ATS) a partir de um JSON."""
import json
import os
import sys
from fpdf import FPDF

data = json.load(open(sys.argv[1], encoding="utf-8"))
out = sys.argv[2]

ACCENT = (11, 95, 138)
DARK = (33, 33, 33)
GRAY = (90, 90, 90)

FDIR = r"C:\Windows\Fonts"
REG = os.path.join(FDIR, "arial.ttf")
BLD = os.path.join(FDIR, "arialbd.ttf")
ITA = os.path.join(FDIR, "ariali.ttf")

pdf = FPDF(format="A4", unit="mm")
pdf.set_auto_page_break(auto=True, margin=10)
pdf.set_margins(15, 12, 15)
pdf.add_page()

pdf.add_font("Arial", "", REG)
pdf.add_font("Arial", "B", BLD if os.path.exists(BLD) else REG)
pdf.add_font("Arial", "I", ITA if os.path.exists(ITA) else REG)

EPW = pdf.epw
LM = pdf.l_margin


def mc(h, txt, w=0):
    """multi_cell que sempre retorna o cursor para a margem esquerda."""
    pdf.multi_cell(w, h, txt, new_x="LMARGIN", new_y="NEXT")


def section(title):
    pdf.ln(1.0)
    pdf.set_font("Arial", "B", 11.5)
    pdf.set_text_color(*ACCENT)
    pdf.set_x(LM)
    pdf.cell(0, 5.6, title.upper(), new_x="LMARGIN", new_y="NEXT")
    y = pdf.get_y()
    pdf.set_draw_color(*ACCENT)
    pdf.set_line_width(0.4)
    pdf.line(LM, y, LM + EPW, y)
    pdf.ln(1.2)
    pdf.set_text_color(*DARK)


def bullet(txt, size=9.8):
    pdf.set_font("Arial", "", size)
    pdf.set_text_color(*DARK)
    pdf.set_x(LM + 3)
    pdf.multi_cell(EPW - 3, 4.6, "•  " + txt, new_x="LMARGIN", new_y="NEXT")


# Cabecalho
pdf.set_font("Arial", "B", 22)
pdf.set_text_color(*ACCENT)
mc(9, data["nome"])
pdf.set_font("Arial", "B", 12)
pdf.set_text_color(*DARK)
mc(6, data["tituloAlvo"])

c = data.get("contatos", {})
bits = [data.get("localizacao"), c.get("email"), c.get("telefone"),
        c.get("linkedin"), c.get("github"), c.get("portfolio"),
        c.get("curriculoOnline")]
bits = [b for b in bits if b]
pdf.set_font("Arial", "", 8.5)
pdf.set_text_color(*GRAY)
mc(4.5, "  |  ".join(bits))
pdf.ln(1)

# Resumo
section("Resumo")
pdf.set_font("Arial", "", 10)
pdf.set_text_color(*DARK)
mc(4.9, data["resumo"])

# Competencias
if data.get("competencias"):
    section("Competências")
    for cat in data["competencias"]:
        pdf.set_x(LM)
        pdf.set_font("Arial", "B", 10)
        pdf.set_text_color(*DARK)
        pdf.write(4.9, cat["categoria"] + ": ")
        pdf.set_font("Arial", "", 10)
        pdf.write(4.9, ", ".join(cat["itens"]))
        pdf.ln(5.4)

# Experiencia
section("Experiência Profissional")
for e in data.get("experiencias", []):
    pdf.set_font("Arial", "B", 10.5)
    pdf.set_text_color(*DARK)
    mc(5, e["cargo"])
    sub = " | ".join([x for x in [e.get("empresa"), e.get("periodo"), e.get("local")] if x])
    pdf.set_font("Arial", "I", 9)
    pdf.set_text_color(*GRAY)
    mc(4.5, sub)
    for b in e.get("bullets", []):
        bullet(b)
    pdf.ln(0.8)

# Projetos
if data.get("projetos"):
    section("Projetos em Destaque")
    for pr in data["projetos"]:
        pdf.set_x(LM)
        pdf.set_font("Arial", "B", 10)
        pdf.set_text_color(*DARK)
        pdf.write(4.9, pr["nome"])
        if pr.get("url"):
            pdf.set_font("Arial", "", 8.5)
            pdf.set_text_color(*GRAY)
            pdf.write(4.9, "   " + pr["url"])
        pdf.ln(5.2)
        pdf.set_font("Arial", "", 9.8)
        pdf.set_text_color(*DARK)
        mc(4.6, pr["descricao"])
        if pr.get("stack"):
            pdf.set_font("Arial", "I", 9)
            pdf.set_text_color(*GRAY)
            mc(4.4, "Stack: " + pr["stack"])
        pdf.ln(0.8)

# Formacao
if data.get("formacao"):
    section("Formação Acadêmica")
    for f in data["formacao"]:
        pdf.set_x(LM)
        pdf.set_font("Arial", "B", 10)
        pdf.set_text_color(*DARK)
        pdf.write(4.9, f["curso"])
        pdf.set_font("Arial", "", 10)
        pdf.write(4.9, "  —  %s · %s" % (f["instituicao"], f["periodo"]))
        pdf.ln(5.4)

# Cursos
if data.get("cursos"):
    section("Cursos e Certificações")
    for cu in data["cursos"]:
        bits = [cu.get("nome"), cu.get("instituicao"), cu.get("periodo")]
        bullet(" - ".join([b for b in bits if b]), size=9.6)

# Idiomas
if data.get("idiomas"):
    section("Idiomas")
    pdf.set_font("Arial", "", 10)
    pdf.set_text_color(*DARK)
    mc(4.9, "; ".join("%s: %s" % (i["idioma"], i["nivel"]) for i in data["idiomas"]))

pdf.output(out)
print("PDF OK ->", out)
