import Image from "next/image";
import { profile } from "../../data/profile";

/**
 * Seção de perfil do topo da sidebar.
 * Exibe avatar (GitHub), nome completo e título profissional.
 * A imagem usa next/image com priority=true pois é o LCP da página.
 * Os dados vêm de data/profile.ts.
 */
export function Profile() {
  return (
    <div className="profile">
      <div className="image">
        <Image
          src={profile.imageUrl}
          alt={profile.fullName}
          width={200}
          height={200}
          sizes="(max-width: 700px) 60vw, (max-width: 1200px) 40vw, 200px"
          draggable={false}
          priority
        />
      </div>
      <h1 className="name">{profile.name}</h1>
      <p className="career">{profile.title}</p>
    </div>
  );
}
