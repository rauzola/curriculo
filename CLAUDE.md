# Currículo Digital — Raul Henrique S. Sigoli

Site de currículo digital estático construído com Next.js 15, React 19 e TypeScript.

## Stack

- **Framework:** Next.js 15 (App Router, SSG)
- **UI:** React 19 + TypeScript strict
- **Estilo:** CSS puro com variáveis CSS (`globals.css`)
- **Ícones:** Font Awesome 4.7 via CDN
- **Imagens:** `next/image` com remote pattern para `avatars.githubusercontent.com`
- **Gerenciador de pacotes:** pnpm (`pnpm install`, `pnpm dev`, `pnpm build`)

## Arquitetura

```
app/
├── types/index.ts              ← interfaces TypeScript compartilhadas
├── data/                       ← dados estáticos tipados (sem JSX)
│   ├── skills.ts               ← SkillCategory[] com percent por skill
│   ├── contact.ts              ← ContactItem[] com ícone, href e label
│   ├── education.ts            ← TimelineEntry[] de formação acadêmica
│   └── courses.ts              ← TimelineEntry[] de cursos realizados
├── components/
│   ├── ui/                     ← primitivos reutilizáveis (sem imports de data/)
│   │   ├── SkillBar.tsx        ← barra de progresso com ARIA
│   │   ├── TimelineItem.tsx    ← item de timeline (simples ou com children)
│   │   ├── ContactLink.tsx     ← link com ícone Font Awesome
│   │   └── index.ts            ← barrel export
│   ├── sections/               ← seções visuais (consomem data/ + ui/)
│   │   ├── Profile.tsx         ← avatar, nome, cargo
│   │   ├── ContactSection.tsx  ← lista de contatos (data-driven)
│   │   ├── SkillsSection.tsx   ← skills por categoria (data-driven)
│   │   ├── AboutSection.tsx    ← texto "Sobre mim" (JSX rico)
│   │   ├── ExperienceSection.tsx ← experiências com descrição rica
│   │   ├── TimelineSection.tsx ← seção genérica data-driven (escolaridade/cursos)
│   │   └── index.ts            ← barrel export
│   ├── LeftSidebar.tsx         ← composição: Profile + Contact + Skills
│   └── RightContent.tsx        ← composição: About + Experience + formação
├── globals.css                 ← design tokens (variáveis CSS), layout, reset
├── layout.tsx                  ← metadata, Inter font, JSON-LD schema.org
└── page.tsx                    ← entry point: LeftSidebar + RightContent
```

## Regras da arquitetura

| Camada | O que pode importar | O que não pode |
|--------|--------------------|-|
| `types/` | nada | tudo |
| `data/` | `types/` | componentes, JSX |
| `ui/` | `types/` | `data/`, outras sections |
| `sections/` | `types/`, `data/`, `ui/` | outros layouts globais |
| `LeftSidebar` / `RightContent` | `sections/`, `data/` | dados inline |
| `page.tsx` | `LeftSidebar`, `RightContent` | dados, estilos diretos |

## Como adicionar conteúdo

### Nova skill
Edite `app/data/skills.ts` — adicione `{ label, percent }` na categoria desejada.
Zero mudança nos componentes.

### Nova categoria de skill
Adicione um objeto `{ title, skills[] }` ao array `skillCategories` em `data/skills.ts`.

### Nova experiência profissional
Adicione um `<TimelineItem>` com children descritivos em `ExperienceSection.tsx`.

### Nova formação ou curso
Adicione `{ period, institution, role }` em `data/education.ts` ou `data/courses.ts`.

### Nova seção simples (só timeline, sem descrição rica)
1. Crie o array em `data/nomeDaSecao.ts`
2. Adicione `<TimelineSection title="..." entries={dados} />` em `RightContent.tsx`

### Nova seção com conteúdo rico
1. Crie `components/sections/NomeDaSecao.tsx`
2. Exporte pelo `sections/index.ts`
3. Importe em `LeftSidebar.tsx` ou `RightContent.tsx`

## Variáveis CSS (design tokens)

Definidas em `globals.css` sob `:root`. Sempre use variáveis em vez de cores hardcoded:

```css
--color-bg: #94D9EA           /* fundo da página */
--color-sidebar: #00324A      /* sidebar esquerda */
--color-sidebar-dark: #002333 /* bordas da sidebar */
--color-content-bg: #f7f7f7   /* fundo do conteúdo */
--color-accent: #2D9CDB       /* azul principal (links, ícones, barras) */
--color-accent-alt: #2F80ED   /* azul secundário (títulos de seção) */
--color-text-muted: #718096   /* texto secundário */
--color-text-dark: #002333    /* texto escuro (títulos timeline) */
--color-border: #ccc          /* bordas e linhas decorativas */
```

## Convenções de código

- Componentes: `PascalCase`, exportados como named exports (não default)
- Dados: `camelCase`, arrays tipados, exportados como named exports
- Props de componentes: estendem interfaces de `types/` quando possível
- Não use inline styles — adicione classes em `globals.css`
- Novos ícones: use Font Awesome 4.7 (`fa-nome-do-icone`)
- Todo link externo deve ter `rel="noopener noreferrer"` (ContactLink faz isso automaticamente)
