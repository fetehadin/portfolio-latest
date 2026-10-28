import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiTelegram, SiX } from "react-icons/si";
import { socials, type Social } from "@/content/site";

const icons: Record<Social["network"], IconType> = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  X: SiX,
  Telegram: SiTelegram,
};

/** One row of logo + name links; the handle stays in the accessible name and tooltip. */
export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Social profiles">
      {socials.map((social) => {
        const Icon = icons[social.network];
        return (
          <li key={social.network}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              title={`${social.network}: ${social.handle}`}
              aria-label={`${social.network} (${social.handle})`}
            >
              <Icon className="size-4" aria-hidden="true" />
              {social.network}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
