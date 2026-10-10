import { motion } from "framer-motion"

function Navbar({ language, setLanguage }) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          className="text-lg font-black tracking-[-0.04em] text-white"
        >
          AZIZ<span className="text-blue-500">.</span>
        </a>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm text-zinc-400 backdrop-blur-xl md:flex">
          <a className="transition hover:text-white" href="#projects">
            Work
          </a>

          <a className="transition hover:text-white" href="#about">
            About
          </a>

          <a className="transition hover:text-white" href="#skills">
            Stack
          </a>

          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>

        {/* AVAILABILITY */}
        <div className="hidden items-center gap-2 text-xs text-zinc-400 sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to opportunities
        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar