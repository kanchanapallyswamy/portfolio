import { CheckCircle, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Accomplishments = () => {
  const accomplishments = [
    {
      id: 1,
      text: "Solved 700+ problems on LeetCode, ranking in the top percentile for problem-solving",
      icon: <CheckCircle className="text-portfolio-blue" size={20} />,
    },
    {
      id: 2,
      text: "Maintained a 53-day streak of continuous problem-solving on LeetCode",
      icon: <Calendar className="text-portfolio-blue" size={20} />,
    },
    {
      id: 3,
      text: "Completed 50+ LeetCode contests demonstrating algorithmic expertise",
      icon: <Award className="text-portfolio-blue" size={20} />,
    },
    {
      id: 4,
      text: "Achieved a LeetCode Contest Rating of 1600 with consistent contest participation",
      icon: <Award className="text-portfolio-blue" size={20} />,
    },
    {
      id: 5,
      text: "Competed in 25+ CodeChef contests demonstrating algorithmic expertise",
      icon: <Award className="text-portfolio-blue" size={20} />,
    },
    {
      id: 6,
      text: "Solved 35+ SQL problems in LeetCode",
      icon: <CheckCircle className="text-portfolio-blue" size={20} />,
    },
    {
      id: 7,
      text: "Ranked among the Top 10 out of 155 students in Being zero training",
      icon: <Award className="text-portfolio-blue" size={20} />,
    },
  ];

  return (
    <section id="accomplishments" className="section-spacing bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-blue/20 text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-portfolio-blue bg-clip-text text-transparent">
            My Accomplishments
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group border border-gray-800 bg-gray-900 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-portfolio-blue/40">
            <div className="h-2 w-full bg-gradient-to-r from-portfolio-orange to-portfolio-blue"></div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {accomplishments.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-start gap-4 group-hover:bg-portfolio-blue/5 p-3 rounded-lg transition-all duration-300"
                    style={{ animationDelay: `${0.2 * item.id}s` }}
                  >
                    <div className="p-2 bg-portfolio-blue/20 rounded-lg mt-1">
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-300 leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <a
                  href="https://leetcode.com/u/kvr_swamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  View LeetCode Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
