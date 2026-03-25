import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { publicUrl } from "../../lib/publicUrl";

const PORTRAIT_IMAGE = publicUrl("assets/images/about-portrait.png");

const SLOGANS = [
  { text: "Problem-Solver,", delay: 0.1 },
  { text: "Builder,", delay: 0.22 },
  { text: "Lifelong Learner!", delay: 0.34 },
] as const;

const BIO_PARAGRAPHS = [
  "Having about three years of academic experience working on implementing solutions to real-world problems, engage with and collaborate with teams of fellow developers in the making, I have had the opportunity to develop not only from an empty IDE window into a project, but also a front-end focused skillset without losing sight of a broader understanding of how full applications come together.",
  "Hours upon hours of grinding at the screen, figuring things out as they break, improving and building to completion has earned me knowledge across an array of skills and tools. I specialize in modern JavaScript frameworks, particularly React, styling frameworks such as bootstrap, MySQL and basic database configuration, structuring components, API wiring, responsive UI experience and more. My approach combines technical expertise with creative problem-solving, ensuring that each solution is not only functional but also scalable and maintainable.",
  "Beyond coding, I'm committed to continuous learning and staying current with industry trends. Whether it's exploring new frameworks, or contributing to open-source projects, I believe in the power of community and knowledge sharing.",
];

const SKILLS_COL_A = [
  "React, TypeScript, and Modern JavaScript",
  "Responsive Web Design & UI/UX",
  "RESTful APIs & GraphQL",
  "Git Version Control",
];

const SKILLS_COL_B = [
  "Database Design (SQL & NoSQL)",
  "Agile/Scrum Methodologies",
  "Testing & Debugging",
];

export function AboutMe() {
  const { scrollY } = useScroll();

  const heroBackground = useTransform(
    scrollY,
    [0, 400],
    ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.05)"]
  );

  return (
    <main className="space-y-16">
      <motion.section
        className="w-full backdrop-blur-md shadow-2xl"
        style={{ backgroundColor: heroBackground }}
      >
        <div className="section-shell py-16">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <motion.div
              className="flex flex-col items-start"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="relative">
                <div className="portrait-glow" aria-hidden />
                <div className="portrait-frame">
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Professional portrait"
                    className="h-96 w-80 object-cover"
                  />
                </div>
              </div>
              <div className="mt-6">
                <h2 className="font-serif text-3xl text-[color:var(--portfolio-cream)]">
                  Hossein Khanzadeh
                </h2>
                <p className="mt-2 text-[color:var(--portfolio-gold)]">
                  Web Developer
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col justify-center space-y-8 pl-0 lg:pl-8">
              {SLOGANS.map((slogan) => (
                <motion.p
                  key={slogan.text}
                  className="slogan-line"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: slogan.delay,
                    ease: "easeOut",
                  }}
                >
                  {slogan.text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section className="section-shell">
        <motion.div
          className="glass-panel mx-auto max-w-4xl p-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
        >
          <h3 className="mb-6 text-center font-serif text-3xl text-[color:var(--portfolio-gold)]">
            Professional Biography
          </h3>
          <div className="space-y-4 text-[color:var(--portfolio-cream)]">
            {BIO_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-shell">
        <motion.div
          className="flex flex-col items-center gap-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.62 }}
        >
          <p className="text-lg text-[color:var(--portfolio-gold)]">
            Scroll for Resume Highlights
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.2,
              repeat: 3,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="h-8 w-8 text-[color:var(--portfolio-gold)]" />
            <ChevronDown className="-mt-4 h-8 w-8 text-[color:var(--portfolio-gold)]" />
          </motion.div>
        </motion.div>
      </section>

      <section className="section-shell">
        <motion.div
          className="resume-panel p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="mb-8 text-center font-serif text-4xl text-[color:var(--portfolio-bg-deep)]">
            Resume Highlights
          </h3>

          <article className="mb-8">
            <h4 className="mb-4 font-serif text-2xl text-[color:var(--portfolio-bg-deep)]">
              Career Objectives
            </h4>
            <p className="text-[color:var(--portfolio-brown)]">
              To leverage my expertise in front-end web development to create
              innovative, user-centric solutions that drive business growth and
              enhance user experiences. I aim to contribute to forward-thinking
              teams where I can continue to grow as a developer while making a
              meaningful impact through technology.
            </p>
          </article>

          <article className="mb-8">
            <h4 className="mb-4 font-serif text-2xl text-[color:var(--portfolio-bg-deep)]">
              Skills Highlight
            </h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-[color:var(--portfolio-brown)]">
                {SKILLS_COL_A.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <ul className="space-y-2 text-[color:var(--portfolio-brown)]">
                {SKILLS_COL_B.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="mb-8">
            <h4 className="mb-4 font-serif text-2xl text-[color:var(--portfolio-bg-deep)]">
              Education
            </h4>
            <div className="text-[color:var(--portfolio-brown)]">
              <p className="font-semibold">
                Advanced Diploma in Computer Programming & Analysis
              </p>
              <p>George Brown College</p>
              <p className="mt-1 text-sm">2023 - 2026</p>
              <p className="mt-2">
                Focus: Front-end Web Development, Software Engineering, Database Systems
              </p>
            </div>
          </article>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={publicUrl("resume.pdf")}
              download
              className="accent-button-inverse"
            >
              <Download className="h-5 w-5 shrink-0" />
              Download Resume
            </a>
            <a
              href={publicUrl("cover-letter.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-button"
            >
              <FileText className="h-5 w-5 shrink-0" />
              View Cover Letter
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
