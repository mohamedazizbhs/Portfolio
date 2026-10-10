import { motion } from "framer-motion"

import {
  SiPython,
  SiReact,
  SiJavascript,
  SiMysql,
  SiGit,
  SiGithub,
  SiHtml5,
  SiPytorch,
  SiUnity,
  SiPandas,
  SiDjango,
  SiTypescript,
  SiMongodb,
  SiGooglecloud,
  SiNetlify,
  SiTailwindcss,
  SiSpringboot,
  SiSymfony,
  SiPhp,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiVercel,
  SiNodered,
  SiTensorflow,
} from "react-icons/si"

import {
  FaJava,
  FaAws,
  FaCss3Alt,
} from "react-icons/fa"

import { VscVscode } from "react-icons/vsc"


const skills = {
  ai: [
    {
      name: "Python",
      icon: <SiPython />,
      color: "#3776AB",
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
      color: "#FF6F00",
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
      color: "#EE4C2C",
    },
    {
      name: "Pandas",
      icon: <SiPandas />,
      color: "#150458",
    },
    {
      name: "AI",
      icon: <span className="font-black">AI</span>,
      color: "#F59E0B",
    },
  ],

  frontend: [
    {
      name: "React",
      icon: <SiReact />,
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
  ],

  backend: [
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      color: "#6DB33F",
    },
    {
      name: "Symfony",
      icon: <SiSymfony />,
      color: "#111111",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      color: "#777BB4",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "#E76F00",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      color: "#092E20",
    },
    {
      name: "REST API",
      icon: <span className="text-sm font-black">API</span>,
      color: "#3B82F6",
    },
  ],

  mobile: [
    {
      name: "Kotlin",
      icon: <SiKotlin />,
      color: "#7F52FF",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      color: "#02569B",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
    },
  ],

  databases: [
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47A248",
    },
    {
      name: "Oracle",
      icon: <span className="text-xs font-black">ORCL</span>,
      color: "#F80000",
    },
  ],

  cloud: [
    {
      name: "AWS",
      icon: <FaAws />,
      color: "#FF9900",
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud />,
      color: "#4285F4",
    },
    {
      name: "Azure",
      icon: <span className="text-sm font-black">AZ</span>,
      color: "#0078D4",
    },
    {
      name: "Git",
      icon: <SiGit />,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      color: "#181717",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: "#111111",
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      color: "#00C7B7",
    },
    {
      name: "Node-RED",
      icon: <SiNodered />,
      color: "#8F0000",
    },
  ],

  tools: [
    {
      name: "VS Code",
      icon: <VscVscode />,
      color: "#007ACC",
    },
    {
      name: "C",
      icon: <span className="text-lg font-black">C</span>,
      color: "#283593",
    },
    {
      name: "C++",
      icon: <span className="text-sm font-black">C++</span>,
      color: "#00599C",
    },
    {
      name: "Unity",
      icon: <SiUnity />,
      color: "#111111",
    },
  ],
}


const categories = [
  {
    title: "AI & Data",
    subtitle: "Intelligence",
    skills: skills.ai,
  },
  {
    title: "Frontend",
    subtitle: "Interface",
    skills: skills.frontend,
  },
  {
    title: "Backend",
    subtitle: "Application Logic",
    skills: skills.backend,
  },
  {
    title: "Mobile",
    subtitle: "Applications",
    skills: skills.mobile,
  },
  {
    title: "Databases",
    subtitle: "Data Storage",
    skills: skills.databases,
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Deployment & Infrastructure",
    skills: skills.cloud,
    large: true,
  },
  {
    title: "Tools & Languages",
    subtitle: "Engineering",
    skills: skills.tools,
  },
]


function SkillBubble({ skill, index }) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0, 4, 0],
      }}
      transition={{
        duration: 4 + (index % 4),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.12,
        y: -8,
      }}
      className="group flex flex-col items-center"
    >
      <div
        className="
          flex h-[74px] w-[74px]
          items-center justify-center
          rounded-full
          border border-white/70
          bg-white
          shadow-[0_10px_30px_rgba(0,0,0,0.14)]
          transition duration-300
          group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)]
          sm:h-[80px] sm:w-[80px]
        "
      >
        <div
          className="flex items-center justify-center text-[30px] sm:text-[34px]"
          style={{
            color: skill.color,
          }}
        >
          {skill.icon}
        </div>
      </div>

      <p className="mt-2 max-w-[90px] text-center text-[11px] font-semibold leading-tight text-white/90 sm:text-xs">
        {skill.name}
      </p>
    </motion.div>
  )
}


function CategoryCard({
  title,
  subtitle,
  categorySkills,
  index,
  large = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
      className={`
        relative overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/[0.045]
        p-6
        backdrop-blur-xl
        ${large ? "lg:col-span-2" : ""}
      `}
    >
      {/* CARD GLOW */}

      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#38BDF8]/10 blur-[55px]" />

      <div className="relative">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7DD3FC]">
          {subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-black tracking-[-0.03em]">
          {title}
        </h3>

        <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-7 sm:justify-start">
          {categorySkills.map((skill, skillIndex) => (
            <SkillBubble
              key={skill.name}
              skill={skill}
              index={skillIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}


function Skills() {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-[#4C3A78]
        via-[#173B70]
        to-[#0B1633]
        px-6 py-32
        text-white
        lg:px-10
      "
    >
      {/* BACKGROUND GLOWS */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#38BDF8]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#A78BFA]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-[180px]" />


      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            My technical universe
          </p>

          <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
            SKILLS
            <span className="text-[#A78BFA]">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/80">
            Technologies I use across artificial intelligence,
            software engineering, full-stack development,
            mobile applications, data and cloud.
          </p>
        </motion.div>


        {/* CATEGORY GRID */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              subtitle={category.subtitle}
              categorySkills={category.skills}
              index={index}
              large={category.large}
            />
          ))}

        </div>


        {/* BOTTOM TEXT */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex justify-end"
        >
          <p className="text-sm font-medium text-white/45">
            Always learning. Always building.
            <span className="ml-2 text-[#A78BFA]">
              ↗
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills