import type { ContactItem } from "../types";

/**
 * Links de contato exibidos na sidebar.
 *
 * Para adicionar um contato: inclua um objeto { icon, href, label } neste array.
 * Links que começam com "http" ou "mailto" recebem target="_blank" e
 * rel="noopener noreferrer" automaticamente via ContactLink.
 *
 * Ícones disponíveis: Font Awesome 4.7 — veja https://fontawesome.com/v4/icons/
 */
export const contactItems: ContactItem[] = [
  {
    icon: "fa-whatsapp",
    href: "https://wa.me/5544991658351",
    label: "044 9 9165-8351",
  },
  {
    icon: "fa-envelope",
    href: "mailto:raul_sigoli@hotmail.com",
    label: "raul_sigoli@hotmail.com",
  },
  {
    icon: "fa-github",
    href: "https://github.com/rauzola?tab=repositories",
    label: "github.com/rauzola",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/raul-sigoli-137bb4173/",
    label: "linkedin.com/in/raul-sigoli",
  },
  {
    icon: "fa-globe",
    href: "https://curriculo-navy.vercel.app/",
    label: "curriculo-navy.vercel.app",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/raul_sigoli/",
    label: "@raul_sigoli",
  },
  {
    icon: "fa-map-marker",
    href: "https://www.google.com.br/maps/place/Maring%C3%A1+-+PR/@-23.4055556,-52.1081267,11z/",
    label: "Maringá - PR",
  },
];
