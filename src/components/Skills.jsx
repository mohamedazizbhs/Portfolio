function Skills() {
  const skills = [
    "React",
    "Tailwind CSS",
    "Symfony",
    "Spring Boot",
    "Kotlin",
    "Python",
    "TensorFlow",
    "MySQL",
    "Firebase",
    "Git"
  ]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-bold">Skills</h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-slate-700 px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills