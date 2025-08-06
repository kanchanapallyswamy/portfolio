import { Code, Globe, Database, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Median Finder",
      description: "Java console application to compute the running median of a dynamic stream of integers using two heaps (Max-Heap and Min-Heap). Users can input numbers interactively and view the current median in real-time.",
      icon: <Globe className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "PriorityQueue", "Heaps", "OOP"],
      color: "from-portfolio-blue to-portfolio-darkBlue",
      liveUrl: "http://medianfinder-kvr.streamlit.app",
      githubUrl: "https://github.com/kanchanapallyswamy/RUNNING-MEDIAN",
      features: ["Real-time computation", "Interactive UI", "O(1) retrieval"],
    },
    {
      id: 2,
      title: "LRU Cache Implementation", 
      description: "Built an interactive Java console app to simulate an LRU Cache using HashMap and Doubly Linked List for O(1) get/put. Supports put, get, display, and exit commands.",
      icon: <Database className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "HashMap", "Doubly Linked List", "OOP"],
      color: "from-portfolio-orange to-red-500",
      liveUrl: "http://lru-cache-kvr.streamlit.app",
      githubUrl: "https://github.com/kanchanapallyswamy/LRU-CACHE",
      features: ["O(1) operations", "Memory efficient", "Custom data structure"],
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-portfolio-blue/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container-section">
        <div className="flex flex-col items-center mb-12">
          <Badge variant="outline" className="bg-gradient-to-r from-portfolio-blue to-portfolio-orange text-white px-4 py-1 text-sm rounded-full font-semibold shadow-sm">
            🚀 My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-portfolio-blue bg-clip-text text-transparent mt-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Here are some of the projects I've built, focusing on algorithm implementation and system efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="animate-fade-in group relative"
              style={{ animationDelay: `${0.2 * project.id}s` }}
            >
              <Card className="h-full overflow-hidden border border-gray-800 shadow-2xl hover:shadow-portfolio-blue/20 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm hover:border-portfolio-blue/50 rounded-xl">
                <div className={`h-2 w-full bg-gradient-to-r ${project.color} shadow-lg`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-blue/10 rounded-xl group-hover:from-portfolio-blue/30 group-hover:to-portfolio-blue/20 transition-all duration-300 border border-portfolio-blue/20">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-portfolio-blue transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-portfolio-blue mb-2 uppercase tracking-wide">Key Features</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gradient-to-r from-portfolio-blue/20 to-portfolio-blue/10 text-white px-2.5 py-1 rounded-full border border-portfolio-blue/30 shadow-sm">
                          ✨ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-portfolio-orange mb-2 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-portfolio-orange/10 text-portfolio-orange px-2.5 py-1 rounded-full border border-portfolio-orange/20 hover:bg-portfolio-orange/20 transition-colors">
                          🛠 {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-gray-700 flex gap-3">
                    <Button 
                      asChild
                      className="flex-1 bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue hover:from-portfolio-orange hover:to-red-500 text-white border-none shadow-lg hover:shadow-xl hover:shadow-portfolio-blue/30 hover:-translate-y-1 transition-all duration-300 group/btn"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <ExternalLink size={14} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        <span className="font-medium text-sm">Live Demo</span>
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="flex-1 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white shadow-lg hover:shadow-xl hover:shadow-portfolio-blue/30 hover:-translate-y-1 transition-all duration-300 group/btn bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github size={14} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        <span className="font-medium text-sm">Code</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
