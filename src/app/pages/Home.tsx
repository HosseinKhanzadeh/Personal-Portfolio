import { useState } from "react";
import { motion } from "motion/react";
import { publicUrl } from "../../lib/publicUrl";

const PHONE_IMAGE = publicUrl("assets/images/home-phone.jpg");

const INTRO_LEAD =
  "I am an enthusiastic junior web developer focused on creating exceptional user experiences in today's digital landscape.";

const INTRO_EXPANDED = [
  "With a strong foundation in modern web technologies and a knack for design, I specialize in building responsive, user-friendly applications that solve real-world problems. My curiosity, continuous learning spirit, and a commitment to excellence have immensely enriched my journey as a junior developer.",
  "My belief in the power of technology to transform ideas into reality, coupled with constant exploring of new frameworks, tools, and best practices drove me into my academic path and have laid the gorund-work for me to stay at the forefront of the industry.",
  "This portfolio highlights my growing projects vault, and will provide a glimpse into my developing approach.",
];

export function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section-shell py-16">
      <div className="glass-panel glass-panel--light relative p-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Welcome to My Digital Portfolio
          </motion.h1>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <img
              src={PHONE_IMAGE}
              alt="Smartphone mockup"
              className="h-auto w-64 rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.article
          className="mt-12 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          <h2 className="mb-4 font-serif text-3xl text-[color:var(--portfolio-cream)]">
            Hello!
          </h2>
          <p className="mb-4 text-[color:var(--portfolio-cream)]">{INTRO_LEAD}</p>

          {!expanded ? (
            <button
              type="button"
              className="text-link-accent"
              onClick={() => setExpanded(true)}
            >
              Read more
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              {INTRO_EXPANDED.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-[color:var(--portfolio-cream)]"
                >
                  {paragraph}
                </p>
              ))}
              <button
                type="button"
                className="text-link-accent"
                onClick={() => setExpanded(false)}
              >
                Read less
              </button>
            </motion.div>
          )}
        </motion.article>
      </div>
    </section>
  );
}
