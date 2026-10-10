import { motion } from "framer-motion"
import profile from "../assets/profile.jpg"

function Hero() {
  return (
   <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0B1633] via-[#173B70] to-[#5B3F8C] px-6 pt-32 text-white lg:px-10"
>

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">

        {/* SMALL TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-7 flex items-center gap-3"
        >
          <div className="h-[1px] w-8 bg-blue-500" />

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
  Software Engineering · AI · Full Stack
</p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_360px]">

          {/* LEFT */}
          <div>
           <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="max-w-5xl text-[clamp(3.8rem,8vw,8.5rem)] font-black leading-[0.84] tracking-[-0.075em]"
>
  I BUILD
  <br />

  <span className="bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] bg-clip-text text-transparent">
    AI-DRIVEN
  </span>

  <br />

  SOLUTIONS
  <span className="text-[#A78BFA]">.</span>
</motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >

              <div className="max-w-lg">
               <p className="text-lg font-medium leading-8 text-white">
  I'm Mohamed Aziz Bel Hadj Salah, a software engineering student focused on building
  intelligent applications, data-driven systems and modern digital experiences.
</p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <a
                    href="#projects"
                    className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white"
                  >
                    Explore my work
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href="/CV_Aziz_Belhaj_Salah.pdf"
                    download
                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/40 hover:text-white"
                  >
                    Download CV ↓
                  </a>

                </div>
              </div>

              <div className="hidden text-right text-xs font-medium uppercase leading-6 tracking-[0.15em] text-white md:block">
                React / Symfony
                <br />
                Spring Boot / Kotlin
                <br />
                Python / AI
              </div>

            </motion.div>
          </div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.35,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto hidden lg:block"
          >

            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.06]" />

            <div className="relative h-[470px] w-[330px] overflow-hidden rounded-[2rem] bg-zinc-900">
              <img
                src={profile}
                alt="Aziz Belhaj Salah"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Based in France
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* DECORATIVE NUMBER */}
            <div className="absolute -right-8 -top-8 font-mono text-xs text-zinc-600">
              01 / 05
            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center justify-between border-t border-white/[0.08] py-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Scroll to explore
          </p>

          <p className="font-mono text-xs text-zinc-600">
            © 2026
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero