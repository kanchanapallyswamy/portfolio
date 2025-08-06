import {
  Code2,
  FileCode,
  Paintbrush,
  Database,
  Github,
  BadgeCheck,
  BookText,
  TerminalSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <FileCode className="text-blue-400" size={16} /> },
        { name: "Java", icon: <FileCode className="text-orange-500" size={16} /> },
        { name: "Python", icon: <FileCode className="text-yellow-400" size={16} /> },
        { name: "Data Structures", icon: <BookText className="text-green-400" size={16} /> },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", icon: <Code2 className="text-orange-400" size={16} /> },
        { name: "CSS", icon: <Paintbrush className="text-blue-300" size={16} /> },
        { name: "JavaScript", icon: <Code2 className="text-yellow-400" size={16} /> },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", icon: <Database className="text-blue-500" size={16} /> },
        { name: "GitHub", icon: <Github className="text-white" size={16} /> },
        { name: "VS Code", icon: <TerminalSquare className="text-cyan-400" size={16} /> },
      ],
    },
    {
      title: "Certifications",
      skills: [
        { name: "NPTEL Java Programming", icon: <BadgeCheck className="text-purple-400" size={16} /> },
        { name: "NPTEL Python Programming", icon: <BadgeCheck className="text-teal-400" size={16} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-spacing bg-black text-white relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-portfolio-orange/10 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-blue/20 text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-portfolio-blue bg-clip-text text-transparent">
            Skills & Knowledge
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 group hover:border-portfolio-blue hover:shadow-lg hover:shadow-portfolio-blue/20 hover:scale-[1.03]"
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 transition-colors group-hover:text-portfolio-blue">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-blue-900 text-blue-300 px-4 py-1 rounded-full text-sm font-medium w-fit hover:scale-105 hover:bg-blue-800 transition-all duration-300"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
