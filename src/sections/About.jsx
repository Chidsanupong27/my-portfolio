import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlight = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive and dynamic web applications using React, Node.js, and Django.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {" "}
          {/* left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-winder uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Buidding the future,
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineering graduate with hands-on
                experience building real-world web applications. My journey
                started with curiosity about how systems work and has grown into
                a strong interest in full-stack development and modern web
                technologies.
              </p>

              <p>
                During my cooperative education at SCG, I worked as a Full-Stack
                Developer, contributing to internal systems such as job
                management, cost estimation, and procurement platforms. I
                developed both frontend and backend using technologies like
                React and PHP, while also working with databases and system
                integration.
              </p>

              <p>
                I enjoy turning ideas into practical solutions and continuously
                improving my skills through building projects, solving
                real-world problems, and learning new technologies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to create meaningful digital experiences that not only
                work well, but also provide real value — building systems that
                are intuitive for users and efficient for developers."
              </p>
            </div>
          </div>

          {/* Right Content- Hilight */}

        </div>
      </div>
    </section>
  );
};
