import type { ContactItem } from "../../types";

/**
 * Item de lista de contato com ícone Font Awesome.
 * Links que começam com "https://", "http://" ou "mailto:" recebem
 * target="_blank" e rel="noopener noreferrer" automaticamente.
 *
 * @example
 * <ContactLink icon="fa-github" href="https://github.com/rauzola" label="github.com/rauzola" />
 */
export function ContactLink({ icon, href, label }: ContactItem) {
  const isExternal =
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:");

  return (
    <li>
      <i className={`fa ${icon}`} aria-hidden="true" />
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    </li>
  );
}
