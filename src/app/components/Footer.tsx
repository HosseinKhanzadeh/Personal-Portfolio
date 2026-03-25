import { Github, Linkedin, Mail } from "lucide-react";

const EMAIL_DISPLAY = "srho3in@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL_DISPLAY}`;

export function Footer() {
  return (
    <footer className="mt-auto bg-black/60 backdrop-blur-sm border-t border-[color:var(--portfolio-gold)]">
      <div className="section-shell py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/HosseinKhanzadeh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--portfolio-cream)] hover:text-[color:var(--portfolio-gold)] transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hossein-khanzadeh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--portfolio-cream)] hover:text-[color:var(--portfolio-gold)] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-2 text-sm text-[color:var(--portfolio-cream)] hover:text-[color:var(--portfolio-gold)] transition-colors"
          >
            <Mail className="w-4 h-4 shrink-0" aria-hidden />
            {EMAIL_DISPLAY}
          </a>

          <div className="text-[color:var(--portfolio-gold)] text-sm text-center">
            © {new Date().getFullYear()} Hossein Khanzadeh · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
