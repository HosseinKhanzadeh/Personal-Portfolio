import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "../components/ProjectModal";
import {
  academicProjects,
  featuredCapstone,
  type PortfolioProject,
} from "../../data/portfolioProjects";
import { isHttpUrl } from "../../lib/isHttpUrl";

function TechStackMuted({
  stack,
  max = 3,
}: {
  stack: string[];
  max?: number;
}) {
  const visible = stack.slice(0, max);
  const rest = stack.length - max;
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {visible.map((tech) => (
        <span key={tech} className="tech-chip-muted">
          {tech}
        </span>
      ))}
      {rest > 0 && (
        <span className="tech-chip-muted">+{rest}</span>
      )}
    </div>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <div className="section-shell space-y-16 py-16">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="mb-8 text-center font-serif text-4xl text-[color:var(--portfolio-gold)]">
          Featured Capstone Project
        </h2>
        <div className="featured-capstone p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <img
              src={featuredCapstone.thumbnail}
              alt={featuredCapstone.title}
              className="h-64 w-full rounded-lg object-cover"
            />
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h3 className="mb-4 font-serif text-3xl text-[color:var(--portfolio-cream)]">
                  {featuredCapstone.title}
                </h3>
                <p className="mb-4 text-[color:var(--portfolio-cream)]">
                  {featuredCapstone.summary}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredCapstone.techStack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredCapstone)}
                  className="accent-button w-fit"
                >
                  <ExternalLink className="h-5 w-5 shrink-0" />
                  View Details
                </button>
                {isHttpUrl(featuredCapstone.githubUrl) && (
                  <a
                    href={featuredCapstone.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-button-inverse w-fit"
                  >
                    <Github className="h-5 w-5 shrink-0" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section>
        <h2 className="mb-8 text-center font-serif text-4xl text-[color:var(--portfolio-gold)]">
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {academicProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-serif text-xl text-[color:var(--portfolio-cream)]">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-[color:var(--portfolio-cream)]">
                  {project.summary}
                </p>
                <TechStackMuted stack={project.techStack} max={3} />
                <div className="mt-auto flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="accent-button flex-1 text-sm"
                  >
                    View Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-button-inverse inline-flex shrink-0 items-center justify-center px-4 py-2 text-sm"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
