import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lumen Security. Todos os direitos
          reservados.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
