import React from "react";
import { IconBaseProps } from "react-icons";

interface SocialLinks {
  icon: React.ElementType<IconBaseProps>;
  link: string;
}

interface FooterProps {
  companyName: string;
  copyrightText: string;
  logo?: string;
  socialLinks?: SocialLinks[];
}

const Footer = ({
  copyrightText,
  companyName,
  socialLinks,
  logo,
}: FooterProps) => {
  return (
    <footer className="bg-card-bg-color border-t border-muted-color/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            {logo && (
              <img
                src={logo}
                alt={`${companyName} logo`}
                className="h-12 w-auto mb-4"
              />
            )}
            <h2 className="text-background-color text-2xl font-bold font-fun bg-clip-text text-transparent bg-gradient-to-r from-accent-color to-secondary-color">
              {companyName}
            </h2>
          </div>

          {/* Social Links */}
          {socialLinks && (
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-comic text-center md:text-right mb-4 text-muted-color">
                Join Our Community
              </h3>
              <ul className="flex space-x-6 justify-center md:justify-end">
                {socialLinks.map(({ icon: Icon, link }) => (
                  <li key={link}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted-color/10 hover:bg-accent-color/20 text-muted-color hover:text-accent-color transition-all duration-300"
                      aria-label={`${companyName} social link`}
                    >
                      <Icon size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-muted-color/10">
          <p className="text-center text-sm text-muted-color font-comic">
            &copy; {new Date().getFullYear()} {companyName}. {copyrightText}
          </p>
        </div>
        {/*Additional Links*/}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <a
            href="#"
            className="text-muted-color hover:text-accent-color text-sm"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-muted-color hover:text-accent-color text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-muted-color hover:text-accent-color text-sm"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
