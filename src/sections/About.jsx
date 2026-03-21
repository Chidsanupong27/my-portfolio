import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlight = [
  {
    icon: Code2,
    title: "Digital Development",
    description:
      "Building responsive and scalable web applications with a focus on usability and real-world problem solving.",
  },
  {
    icon: Rocket,
    title: "System & Performance",
    description:
      "Optimizing system performance while ensuring smooth and efficient user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration & Analysis",
    description:
      "Working with teams to understand requirements, analyze needs, and deliver effective solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Problem Solving",
    description:
      "Applying new technologies and ideas to design practical and impactful digital solutions.",
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
                I am a computer science graduate with hands-on experience
                building real-world web applications. My journey began with
                curiosity about how systems work and has evolved into a strong
                interest in full-stack development, user experience, and system
                design.
              </p>

              <p>
                I have experience developing web applications across both
                frontend and backend using technologies such as React and PHP.
                Beyond coding, I enjoy analyzing user requirements,
                understanding business processes, and designing systems that
                effectively support real-world needs.
              </p>

              <p>
                I enjoy turning ideas into practical solutions by combining
                technical skills with analytical thinking. I continuously
                improve myself through building projects, solving real-world
                problems, and exploring new technologies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to build digital solutions that not only work seamlessly,
                but also create real value — bridging technology, user
                experience, and business needs."
              </p>
            </div>
          </div>
          {/* Right Content- Hilight */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
