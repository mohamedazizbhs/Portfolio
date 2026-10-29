import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B1633] via-[#173B70] to-[#5B3F8C] px-6 py-32 text-white lg:px-10"
    >
      {/* GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#38BDF8]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#A78BFA]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Contact
          </p>
        </motion.div>

        {/* BIG TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <h2 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.07em]">
            LET'S BUILD
            <br />

            <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
              SOMETHING
            </span>

            <br />
            TOGETHER.
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-xl text-lg font-medium leading-8 text-white/80">
              Have a project, internship opportunity or collaboration in mind?
              Feel free to reach out. I'm always open to discussing new ideas,
              technical challenges and interesting opportunities.
            </p>

            <motion.a
              href="mailto:azizbhs75@gmail.com"
              whileHover={{ x: 8 }}
              className="group mt-10 inline-flex items-center gap-5 text-2xl font-bold"
            >
              azizbhs75@gmail.com

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#38BDF8] group-hover:to-[#A78BFA]">
                ↗
              </span>
            </motion.a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-8 lg:items-end"
          >
            <div className="flex flex-col gap-4 text-lg font-semibold">
              <a
                href="https://github.com/azizbhs75"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 transition hover:text-[#7DD3FC]"
              >
                GitHub
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 transition hover:text-[#7DD3FC]"
              >
                LinkedIn
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>

              <a
                href="/aziz_bhs_cv.pdf"
                download
                className="group flex items-center gap-3 transition hover:text-[#A78BFA]"
              >
                Download CV
                <span className="transition group-hover:translate-y-1">↓</span>
              </a>
            </div>

            <div className="text-left lg:text-right">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Currently
              </p>

              <p className="mt-2 text-sm font-medium text-white/70">
                Open to internships & opportunities
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact