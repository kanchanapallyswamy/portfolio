import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sreenidhi Institute of Science and Technology",
      period: "2022–2026",
      score: "CGPA: 8.97/10",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Pranava Junior College, Bhongir",
      period: "2020–2022",
      score: "Score: 979/1000",
    },
    {
      degree: "Secondary School",
      institution: "KPR Gowtham School, Sathupally",
      period: "2019–2020",
      score: "GPA: 10/10",
    },
  ];

  return (
    <section
      id="about"
      className="bg-black relative overflow-hidden pt-0 mt-0"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-blue/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-orange/10 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container-section">
        <div className="flex flex-col items-center mb-4">
          <span className="bg-gradient-to-r from-portfolio-blue/20 to-portfolio-orange/20 text-portfolio-blue px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md">
            🚀 About Me
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Personal Bio */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="ml-0">
              <h3 className="text-3xl font-extrabold mb-4 text-white tracking-wide">
                Who I Am
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a software developer with a strong focus on Java and Data
                Structures & Algorithms. I've solved over 700 problems on
                LeetCode and actively participate in coding contests to sharpen
                my problem-solving skills. I enjoy writing clean, efficient
                code and continuously challenge myself to grow as a developer.
                My approach is simple — stay curious, keep building, and
                improve one step at a time.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-3xl font-extrabold mb-8 text-white tracking-wide text-center">
              🎓 Academic Journey
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-portfolio-blue to-portfolio-orange"></div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-portfolio-lightBlue/30 rounded-full">
                        <Briefcase className="text-portfolio-blue" size={22} />
                      </div>
                      <h4 className="font-bold text-lg text-white group-hover:text-portfolio-blue transition-colors">
                        {item.degree}
                      </h4>
                    </div>
                    <p className="text-gray-400">{item.institution}</p>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-portfolio-orange font-medium">
                        {item.period}
                      </span>
                      <span className="bg-portfolio-blue/20 text-portfolio-blue font-semibold px-3 py-1 rounded-full">
                        {item.score}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
