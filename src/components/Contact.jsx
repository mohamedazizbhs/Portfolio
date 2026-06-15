function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-bold">Contact</h2>

      <p className="mt-6 text-slate-400">
        Feel free to contact me for internships, projects, or collaboration.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <a href="mailto:azizbhs75@gmail.com" className="text-blue-400 hover:underline">
          azizbhs75@gmail.com
        </a>

        <a href="https://github.com/azizbhs75" target="_blank" className="text-blue-400 hover:underline">
          GitHub
        </a>

        <a href="https://linkedin.com" target="_blank" className="text-blue-400 hover:underline">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact