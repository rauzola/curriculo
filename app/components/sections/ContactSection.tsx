import { contactItems } from "../../data/contact";
import { ContactLink } from "../ui";

/**
 * Seção de contato da sidebar.
 * Renderiza a lista de contactItems de data/contact.ts.
 * Para adicionar/remover contatos, edite apenas o arquivo de dados.
 */
export function ContactSection() {
  return (
    <nav className="contact-info" aria-label="Contato">
      <h2 className="main-title">Contato</h2>
      <ul>
        {contactItems.map((item) => (
          <ContactLink key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}
