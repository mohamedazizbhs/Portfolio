import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B1633] via-[#173B70] to-[#4C3A78] px-6 py-32 text-white lg:px-10"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#38BDF8]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            About me
          </p>

          <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
            WHO I AM
            <span className="text-[#A78BFA]">.</span>
          </h2>
        </motion.div>

        {/* BENTO */}
        <div className="grid gap-5 lg:grid-cols-12">

          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 backdrop-blur-xl lg:col-span-7"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#38BDF8]/10 blur-3xl transition duration-500 group-hover:bg-[#38BDF8]/20" />

            <span className="font-mono text-xs text-[#7DD3FC]">
              01 / PROFILE
            </span>

            <h3 className="mt-10 text-3xl font-bold leading-tight md:text-5xl">
              I like building things
              <br />
              that actually do something.
            </h3>

            <p className="mt-8 max-w-2xl text-base font-medium leading-7 text-white/85">
              I’m Aziz Belhaj Salah, a software engineering student focused on
              artificial intelligence, data-driven systems, full-stack
              development and connected applications.
            </p>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/75">
              What motivates me most is taking a technical problem, understanding
              how it works, and turning it into something real, usable and
              intelligent.
            </p>
          </motion.div>

          {/* AI CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2563EB]/40 to-[#38BDF8]/15 p-7 lg:col-span-5"
          >
            <span className="font-mono text-xs text-white/60">
              FOCUS / AI
            </span>

            <div className="mt-12">
              <p className="text-5xl">✦</p>

              <h3 className="mt-5 text-3xl font-bold">
                Artificial Intelligence
              </h3>

              <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-white/75">
                Machine learning, deep learning, prediction systems and intelligent
                applications.
              </p>
            </div>
          </motion.div>

          {/* DATA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#38BDF8]/20 to-[#173B70]/40 p-7 lg:col-span-4"
          >
            <span className="font-mono text-xs text-white/50">
              FOCUS / DATA
            </span>

            <div className="mt-10">
              <p className="text-4xl">⌁</p>

              <h3 className="mt-5 text-2xl font-bold">
                Data & Analysis
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-white/70">
                Turning raw data into meaningful insights, predictions and
                decisions.
              </p>
            </div>
          </motion.div>

          {/* FULL STACK */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#8B5CF6]/30 to-[#4C3A78]/40 p-7 lg:col-span-4"
          >
            <span className="font-mono text-xs text-white/50">
              FOCUS / FULL STACK
            </span>

            <div className="mt-10">
              <p className="text-4xl">⌘</p>

              <h3 className="mt-5 text-2xl font-bold">
                Full Stack
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-white/70">
                Building complete applications from interface to backend logic.
              </p>
            </div>
          </motion.div>

          {/* MINDSET */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 lg:col-span-4"
          >
            <span className="font-mono text-xs text-white/50">
              MINDSET
            </span>

            <div className="mt-10">
              <p className="text-4xl">↗</p>

              <h3 className="mt-5 text-2xl font-bold">
                Build. Test. Improve.
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-white/70">
                I enjoy iterating, learning fast and improving ideas through
                experimentation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About