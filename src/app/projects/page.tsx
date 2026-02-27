import { allProjects } from "../../constants/projects";
import { RiTwitterXFill } from "react-icons/ri";

const isTwitterLink = (url: string) =>
  url.includes('twitter.com') || url.includes('x.com');

export default function Projects() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto p-4 py-16">
        <h1 className="font-serif text-black text-3xl mb-8">Projects</h1>

        <ul className="space-y-4">
          {allProjects.map((project) => (
            <li key={project.title} className="flex gap-4 items-center">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-10 h-10 rounded-md object-cover shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-md shrink-0 bg-gray-200" />
              )}
              <div className="flex-1 text-gray-700">
                <span className="font-medium text-black">{project.title}</span>
                {project.subtitle && (
                  <span className="text-gray-500">: {project.subtitle}</span>
                )}
                {project.links && project.links.length > 0 && (
                  <span className="ml-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm mr-1 inline-flex items-center"
                      >
                        {isTwitterLink(link.link) ? (
                          <RiTwitterXFill className="w-3.5 h-3.5 relative top-[2px]" />
                        ) : (
                          `[${link.title.toLowerCase()}]`
                        )}
                      </a>
                    ))}
                  </span>
                )}
              </div>
              {project.year && (
                <span className="text-gray-400 text-sm shrink-0">{project.year}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
