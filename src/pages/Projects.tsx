const projectList = [
  {
    title: "Real-time Chat App",
    description:
      "Developed using the MERN stack with Socket.IO for real-time messaging. Supports one-on-one and group chats with a smooth UI.",
    codeLink: "https://github.com/sam33r0/chat-backend",
    liveLink: "https://chatzu.vercel.app",
  },
  {
    title: "Recipe Sharing Platform",
    description:
      "Built with MERN. Features authentication, user-friendly recipe feeds, and a dynamic UI for culinary creators.",
    codeLink: "https://github.com/sam33r0/recipe-connect",
    liveLink: "https://recipe-connect.vercel.app/",
  },
  {
    title: "trustBUZZaar – Shopify Store",
    description:
      "Launched a Shopify store. Managed design, ads, and branding for a complete e-commerce funnel.",
    // codeLink: "https://github.com/sameer/trustbuzzaar", 
    liveLink: "https://trustbuzzaar.in",
  },
  {
    title: "FOG Technologies (Internship)",
    description:
      "Engineered core game logic in Node.js and integrated frontend interfaces. Focused on gameplay mechanics and optimization.",
    // codeLink: "https://github.com/sameer/fog-internship", // Optional
    certificate: "./FOG_InternCertificate_Sameer.pdf",
  },
];

function Projects() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-slate-800 via-lime-300 to-slate-400 pt-12">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Projects
      </h2>
      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex gap-4">
              {project.codeLink && <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-100 transition"
              >
                View Code
              </a>}
              {project.liveLink && <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Live Demo
              </a>}
              {project.certificate && <a
                href={project.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Certificate
              </a>}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;
