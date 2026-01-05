import MagneticIcon from './MagneticIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

type SocialLinksProps = {
  size: number;
  className?: string;
  ariaLabel?: string;
};

export default function SocialLinks({
  size,
  className,
  ariaLabel = 'Social links',
}: SocialLinksProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <MagneticIcon>
        <a
          href="https://www.linkedin.com/in/brandon-garcia-54708516b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <FaLinkedin size={size} className="hover:text-sky-600" />
        </a>
      </MagneticIcon>
      <MagneticIcon>
        <a
          href="https://github.com/grandonbarcia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <FaGithub size={size} className="hover:text-green-600" />
        </a>
      </MagneticIcon>
      <MagneticIcon>
        <a
          href="mailto:grandonleebarcia@gmail.com"
          aria-label="Send email to Brandon"
        >
          <IoIosMail size={size} className="hover:text-red-700" />
        </a>
      </MagneticIcon>
    </nav>
  );
}
