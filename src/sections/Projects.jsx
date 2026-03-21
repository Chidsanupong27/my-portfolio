import { ArrowUpRight, Github, ArrowRight, Play, X } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
  {
    title: "Kubota Excavator Mobile App",
    description:
      "Designed and prototyped a user-centric mobile application for excavator products at SIAM KUBOTA, focusing on intuitive UI/UX and enhancing customer engagement. Also developed a lightweight web system using Google Apps Script to collect and manage customer interest data.",
    image: "/projects/Project1.png",
    video: "/videos/Kud-preview.mp4",
    tags: ["Figma", "UX/UI", "JavaScript", "Google Apps Script"],
    link: "#projects",
    github: "#projects",
  },
  {
    title: "SCG Internal Web Platforms",
    description:
      "Developed internal web platforms for SCG Thung Song to support job requests, cost estimation, and bidding workflows. Worked as a Full-Stack Developer, building responsive frontend interfaces and backend systems for real enterprise operations.",
    image: "/projects/Project6.png",
    video: "/videos/scg-preview.mp4",
    tags: ["React", "PHP", "SQL", "Tailwind CSS"],
    link: "#projects",
    github: "https://github.com/orgs/MRO-TS/repositories",
  },
  {
    title: "Condominium Management Mobile App",
    description:
      "Designed a user-friendly mobile application for condominium management, focusing on improving user experience for residents. The app enables users to easily manage and reserve shared facilities such as gyms, swimming pools, and meeting rooms.",
    image: "/projects/Project2.png",
    video: "/videos/condo-preview.mp4",
    tags: ["Figma", "UX/UI", "Mobile Design"],
    link: "#projects",
    github: "#projects",
  },
  {
    title: "Shabu Restaurant Management System",
    description:
      "Designed and developed a restaurant management system to handle table reservations, menu management, and user accounts. Focused on creating a clean and user-friendly interface while implementing core system functionalities.",
    image: "/projects/Project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    link: "#projects",
    github: "https://github.com/FightFK/4Shabu-Web",
  },
  {
    title: "Expense Tracker Mobile App",
    description:
      "Developed a mobile application for tracking income and expenses, helping users manage their finances more effectively. Focused on creating a simple and intuitive user experience with real-time data handling.",
    image: "/projects/Project4.png",
    video: "/videos/expence-preview.mp4",
    tags: ["React Native", "Firebase", "Figma","Expo GO","Expo.dev"],
    link: "#projects",
    github: "#projects",
  },
  {
    title: "Quadash – Business Management Platform (Award Project)",
    description:
      "Designed a web-based business management platform similar to a POS system, aimed at helping entrepreneurs manage and grow their businesses more efficiently.",
    image: "/projects/Project5.png",
    video: "/videos/quad1-preview.mp4",
    tags: ["Figma"],
    link: "#projects",
    github: "#projects",
  },
    {
    title: "Print System",
    description:
      "Designed a web-based business management platform similar to a POS system, aimed at helping entrepreneurs manage and grow their businesses more efficiently.",
    image: "/projects/Project7.png",
    video: "/videos/print-preview.mp4",
    tags: ["Figma"],
    link: "#projects",
    github: "#projects",
  },
    {
    title: "Human Fall Detaction",
    description:
      "Designed a web-based business management platform similar to a POS system, aimed at helping entrepreneurs manage and grow their businesses more efficiently.",
    image: "/projects/Project8.png",
    video: "",
    tags: ["YOLOv8","Colab" ,"Roboflow"],
    link: "#projects",
    github: "#projects",
  },
];

export const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-winder uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects that showcase my skills in design and
            development, demonstrating my ability to create meaningful digital
            experiences that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card
                via-card/50 to-transparent opacity-60"
                />

                {/* Overlay link */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() =>
                      setActiveVideo({
                        title: project.title,
                        video: project.video,
                      })
                    }
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Play className="w-5 h-5" />
                  </button>

                  {/* ของเดิม */}
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {" "}
                    {project.title}{" "}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ปุ่มปิด */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 text-white"
              >
                <X />
              </button>

              {/* video */}
              <video
                src={activeVideo.video}
                controls
                autoPlay
                className="w-full h-auto max-h-[70vh] object-contain bg-white/5 backdrop-blur-xl border border-white/10"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
