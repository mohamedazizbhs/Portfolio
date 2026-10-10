import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const projects = [
  {
  number: "01",
  title: "Stock Market Prediction",
  subtitle: "AI-powered financial forecasting system",
  description:
    "A deep-learning project designed to analyse financial time series, predict market movements and support Buy / Hold / Sell decisions using advanced forecasting models.",

  technologies: [
    "Python",
    "TensorFlow",
    "LSTM",
    "BiLSTM",
    "Pandas",
    "Scikit-learn",
  ],

  category: "Artificial Intelligence · Finance",
  visual: "MARKET / AI",

  github: null,

  huggingface:
    "https://huggingface.co/spaces/ENSIM/Prediction_Boursiere",

  demo: null,
  video: null,
  presentation: null,
},

  {
    number: "02",
    title: "FarmWise",
    subtitle: "Generative AI, environmental data & MLOps",
    description:
      "A generative AI project focused on creating synthetic agricultural and environmental images from structured data, enabling the visualisation of different climate and groundwater scenarios to support smarter and more sustainable farming decisions.",
    technologies: [
      "Python",
      "PyTorch",
      "GAN",
      "Stable Diffusion",
      "MLOps",
      "Pandas",
    ],
    category: "Generative AI · MLOps",
    visual: "GAN / VISION",

    github: "https://github.com/nourelhouda2000/Farmwise.git",
    demo: null,
    video: "/videos/Farmwise.mp4",
    presentation: null,
  },

  {
    number: "03",
    title: "IQ Overload",
    subtitle: "Real-time cognitive load analysis",
    description:
      "A system analysing physiological signals to estimate cognitive workload in real time, with personalised calibration, visualisation and automatic report generation.",
    technologies: [
      "Python",
      "BITalino",
      "NumPy",
      "Matplotlib",
      "Tkinter",
      "Jinja2",
    ],
    category: "AI · Signal Processing",
    visual: "BRAIN / DATA",

    github: "https://github.com/hendzormati/2026_4ATechFacHum_ZORMATI_BELHAJSALAH.git",
    demo: null,
    video: null,
    presentation: null,
  },

  {
    number: "04",
    title: "Insuria",
    subtitle: "Multi-platform insurance ecosystem",
    description:
      "A complete insurance ecosystem combining web, desktop and mobile applications around a shared REST API, with modules for subscriptions, contracts, claims and renewals.",
    technologies: [
      "Symfony",
      "Java",
      "JavaFX",
      "Kotlin",
      "Firebase",
      "REST API",
      "Oracle",
    ],
    category: "Full Stack · Mobile · Insurance",
    visual: "INSURIA",

    features: [
      "Web insurance platform",
      "Desktop application",
      "Mobile application",
      "Claim declaration and tracking",
      "Contract management",
      "REST API",
      "Firebase integration",
    ],

    github : "https://github.com/CCRami/Insuria-for-Web.git",
    github : "https://github.com/CCRami/Insuria-for-Desktop.git",
    github : "https://github.com/mohamedazizbhs/InsuriaApp.git",
    demo: null,
    video: null,
    presentation: null,
  },

  {
    number: "05",
    title: "BrainWave",
    subtitle: "Desktop application built with Qt & C++",
    description:
      "A desktop application designed around ADHD support, combining a Qt/C++ interface with intelligent features such as facial recognition, chatbot interaction and SMS notifications.",
    technologies: [
      "C++",
      "Qt",
      "Python",
      "OpenCV",
      "Twilio",
      "Oracle",
    ],
    category: "Desktop · C++ · AI",
    visual: "BRAINWAVE",

    github: "https://github.com/azizbhs75/YOUR_REPO_NAME",
    demo: null,
    video: null,
    presentation: null,
  },

  {
    number: "06",
    title: "Immersive Experiences",
    subtitle: "Virtual & augmented reality applications",
    description:
      "A collection of immersive projects exploring virtual reality, augmented reality, 3D interaction and interactive user experiences.",
    technologies: [
      "VR",
      "AR",
      "3D",
      "Immersive UX",
    ],
    category: "VR · AR · Immersive Tech",
    visual: "VR / AR",

    github: null,
    demo: null,
    video: null,
    presentation: null,
  },

  {
    number: "07",
    title: "Othello Simulation",
    subtitle: "Game logic, algorithms & strategy",
    description:
      "A simulation of the Othello board game focused on algorithmic thinking, game rules, decision logic and strategy implementation.",
    technologies: [
      "Algorithms",
      "Simulation",
      "Game Logic",
      "AI Concepts",
    ],
    category: "Algorithms · Simulation",
    visual: "OTHELLO",

    github: null,
    demo: null,
    video: null,
    presentation: null,
  },
]

function ProjectVisual({ project }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96]
  )

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className="group relative"
    >
      <div className="absolute -inset-4 rounded-[2rem] border border-white/[0.05]" />

      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-white/[0.10] bg-gradient-to-br from-[#152A56] via-[#1D3F75] to-[#5B3F8C] shadow-2xl shadow-black/20">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* GLOW */}
        <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-[#38BDF8]/20 blur-[80px] transition duration-700 group-hover:bg-[#38BDF8]/35" />

        <div className="absolute -right-10 bottom-10 h-52 w-52 rounded-full bg-[#A78BFA]/20 blur-[80px] transition duration-700 group-hover:bg-[#A78BFA]/35" />

        {/* NUMBER */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute left-6 top-6 font-mono text-xs text-blue-100/50"
        >
          PROJECT / {project.number}
        </motion.span>

        {/* VIDEO OR FALLBACK VISUAL */}
<div className="absolute inset-0">
  {project.video ? (
    <>
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
    </>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex h-full w-full items-center justify-center"
    >
      <p className="text-center text-4xl font-black tracking-[-0.06em] text-white/10 transition duration-700 group-hover:scale-110 group-hover:text-white/25 md:text-6xl">
        {project.visual}
      </p>
    </motion.div>
  )}
</div>

        {/* BOTTOM */}
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-2 h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#A78BFA]"
            />

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-100/40">
              Case Study
            </p>
          </div>

          <p className="font-mono text-[10px] text-blue-100/30">
            2026
          </p>
        </div>

      </div>
    </motion.div>
  )
}

function ProjectLinks({ project }) {
  const hasLinks =
    project.github ||
    project.huggingface ||
    project.demo ||
    project.video ||
    project.presentation

  if (!hasLinks) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-10 flex flex-wrap gap-3"
    >
      {project.huggingface && (
        <motion.a
          href={project.huggingface}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="rounded-full bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white shadow-lg transition"
        >
          🤗 Open on Hugging Face ↗
        </motion.a>
      )}

      {project.github && (
        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.10]"
        >
          GitHub ↗
        </motion.a>
      )}

      {project.demo && (
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.10]"
        >
          Live Demo ↗
        </motion.a>
      )}

      {project.video && (
        <motion.a
          href={project.video}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.10]"
        >
          Watch Video ▶
        </motion.a>
      )}

      {project.presentation && (
        <motion.a
          href={project.presentation}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.10]"
        >
          Presentation ↗
        </motion.a>
      )}
    </motion.div>
  )
}
function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-[#5B3F8C] via-[#173B70] to-[#0B1633] px-6 py-32 text-white lg:px-10"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[600px] w-[600px] rounded-full bg-[#38BDF8]/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 border-b border-white/10 pb-10"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Selected work
              </p>

              <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
                PROJECTS
                <span className="text-[#A78BFA]">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm font-medium leading-6 text-white/75">
              A selection of projects combining artificial intelligence,
              software engineering, full-stack development, mobile and
              immersive technologies.
            </p>

          </div>
        </motion.div>

        {/* PROJECTS */}
        <div>
          {projects.map((project, index) => {
            const reversed = index % 2 !== 0

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative border-b border-white/10 py-24 md:py-32"
              >

                {/* TOP LINE */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#38BDF8]/40 via-white/10 to-[#A78BFA]/40"
                />

                <div
                  className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${
                    reversed
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* TEXT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reversed ? 50 : -50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >

                    <div className="mb-10 flex items-center gap-5">

                      <span className="font-mono text-xs text-[#7DD3FC]">
                        {project.number}
                      </span>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-[1px] bg-white/30"
                      />

                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                        {project.category}
                      </span>

                    </div>

                    {/* TITLE */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.045em] md:text-6xl"
                    >
                      {project.title}
                      <span className="text-[#A78BFA]">.</span>
                    </motion.h3>

                    {/* SUBTITLE */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-5 text-lg font-semibold text-white"
                    >
                      {project.subtitle}
                    </motion.p>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-7 max-w-lg text-base font-medium leading-7 text-white/75"
                    >
                      {project.description}
                    </motion.p>

                    {/* INSURIA FEATURES */}
                    {project.features && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.35,
                        }}
                        className="mt-8 grid gap-3 sm:grid-cols-2"
                      >
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 text-sm font-medium text-white/75"
                          >
                            <span className="mt-1 text-[#7DD3FC]">
                              ✦
                            </span>

                            <span>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* TECHNOLOGIES */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                      }}
                      className="mt-9 flex flex-wrap gap-x-5 gap-y-3"
                    >
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="font-mono text-xs font-medium uppercase tracking-wider text-white/60 transition duration-300 hover:text-[#7DD3FC]"
                        >
                          {technology}
                        </span>
                      ))}
                    </motion.div>

                    {/* LINKS */}
                    <ProjectLinks project={project} />

                  </motion.div>

                  {/* VISUAL */}
                  <ProjectVisual project={project} />

                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Projects