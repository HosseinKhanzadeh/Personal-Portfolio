import { X, Github } from "lucide-react";
import { motion } from "motion/react";
import type { PortfolioProject } from "../../data/portfolioProjects";
import { isHttpUrl } from "../../lib/isHttpUrl";

type ProjectModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.button
        type="button"
        className="absolute inset-0 z-0 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Close project details"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border-2 border-[color:var(--portfolio-gold)] bg-[color:var(--portfolio-bg-deep)] shadow-2xl"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-[color:var(--portfolio-cream)] transition-colors hover:text-[color:var(--portfolio-gold)]"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="mb-6 h-64 w-full rounded-lg object-cover"
          />

          <h2
            id="project-modal-title"
            className="mb-4 font-serif text-4xl text-[color:var(--portfolio-cream)]"
          >
            {project.title}
          </h2>

          <section className="mb-6">
            <h3 className="mb-3 font-serif text-2xl text-[color:var(--portfolio-gold)]">
              Project Overview
            </h3>
            <p className="max-w-prose text-[color:var(--portfolio-cream)] leading-relaxed">
              {project.detail}
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-3 font-serif text-2xl text-[color:var(--portfolio-gold)]">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {project.highlights.length > 0 && (
            <section className="mb-6">
              <h3 className="mb-3 font-serif text-2xl text-[color:var(--portfolio-gold)]">
                Highlights
              </h3>
              <ul className="max-w-prose space-y-2 text-[color:var(--portfolio-cream)] leading-relaxed">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>
          )}

          {isHttpUrl(project.githubUrl) && (
            <div className="mt-8 flex justify-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-button"
              >
                <Github className="h-5 w-5 shrink-0" />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
