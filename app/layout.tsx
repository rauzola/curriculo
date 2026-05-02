import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raul Henrique S. Sigoli — Desenvolvedor Full-Stack",
  description:
    "Currículo profissional de Raul Henrique Silva Sigoli, Desenvolvedor Full-Stack especializado em React, Next.js e Node.js. Disponível para projetos e oportunidades. Maringá - PR.",
  openGraph: {
    title: "Raul Henrique S. Sigoli — Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em React, Next.js e Node.js.",
    type: "profile",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raul Henrique Silva Sigoli",
  givenName: "Raul Henrique",
  familyName: "Silva Sigoli",
  jobTitle: "Desenvolvedor Full-Stack",
  email: "raul_sigoli@hotmail.com",
  telephone: "+5544991658351",
  image: "https://avatars.githubusercontent.com/u/57502280?v=4",
  inLanguage: "pt-BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maringá",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/rauzola",
    "https://www.linkedin.com/in/raul-sigoli-137bb4173/",
    "https://www.instagram.com/raul_sigoli/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Ir para conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
