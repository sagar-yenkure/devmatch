import Link from "next/link";
import { Code, Github, Linkedin, Twitter } from "lucide-react";

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">DevMatch</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Connecting developers through shared passions, skills, and
              interests. Find your perfect code partner today.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={18} />}
              />
              <SocialLink
                href="https://github.com"
                icon={<Github size={18} />}
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={18} />}
              />
            </div>
          </div>

          <FooterLinks
            title="About"
            links={[
              { name: "Our Story", href: "/about" },
              { name: "How It Works", href: "/how-it-works" },
              { name: "Careers", href: "/careers" },
              { name: "Press", href: "/press" },
            ]}
          />

          <FooterLinks
            title="Resources"
            links={[
              { name: "Blog", href: "/blog" },
              { name: "Developer Events", href: "/events" },
              { name: "Hackathons", href: "/hackathons" },
              { name: "Tech Stack Guide", href: "/tech-stack" },
            ]}
          />

          <FooterLinks
            title="Support"
            links={[
              { name: "Help Center", href: "/help" },
              { name: "Safety Tips", href: "/safety" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
            ]}
          />
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
