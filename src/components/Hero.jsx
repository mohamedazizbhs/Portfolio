import profile from "../assets/profile.jpg"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-24">
      <motion.div
        className="grid max-w-6xl items-center gap-12 md:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center md:text-left">
          <p className="mb-4 text-blue-400">Hello, I am</p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Aziz Belhaj Salah
          </h1>

          <h2 className="mt-4 text-2xl text-slate-300 md:text-3xl">
            Software Engineering Student
          </h2>

          <p className="mt-6 max-w-2xl text-slate-400">
            I create web platforms, mobile applications, and AI solutions using
            React, Symfony, Spring Boot, Kotlin, and Python.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:border-blue-400"
            >
              Contact Me
            </a>

            <a
              href="/CV_Aziz_Belhaj_Salah.pdf"
              download
              className="rounded-xl bg-slate-800 px-6 py-3 font-semibold hover:bg-slate-700"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Aziz"
            className="h-72 w-72 rounded-full border-4 border-blue-500 object-cover md:h-80 md:w-80"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero