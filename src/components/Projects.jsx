const projects = [
  {
    title: "Insurance Mobile Application",
    description:
      "Mobile app for claim declaration with camera, GPS localization, voice input, and claim tracking.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    title: "Stock Market Prediction",
    description:
      "AI project using LSTM and Transformer models to predict market trends and evaluate trading strategies.",
    tech: ["Python", "TensorFlow", "Pandas"],
  },
  {
    title: "Cognitive Load Detection",
    description:
      "Machine learning project using EEG, EDA, and PPG signals to estimate driver cognitive load.",
    tech: ["Python", "Machine Learning", "Signal Processing"],
  },
  {
    title: "Insurance Management Platform",
    description:
      "Full-stack web platform for insurance management, orders, payments, dashboard, and AI recommendation.",
    tech: ["Symfony", "MySQL", "Stripe", "OpenAI API"],
  },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-bold">Featured Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-blue-400"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>

            <p className="mt-4 text-slate-400">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects