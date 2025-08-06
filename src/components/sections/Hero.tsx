import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 bg-black relative"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-portfolio-blue/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-portfolio-orange/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className="order-2 md:order-1 space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-portfolio-blue/10 text-portfolio-blue px-4 py-1 rounded-full text-sm font-semibold inline-block shadow-sm">
              Java Developer
            </span>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue bg-clip-text text-transparent">
                KVRSWAMY
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              Enthusiastic Java programmer with a strong foundation in Data
              Structures & Algorithms. Constantly learning and solving problems
              through code.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="default"
                className="bg-portfolio-orange hover:bg-portfolio-darkBlue transition-all duration-300 shadow-lg hover:shadow-portfolio-blue/30 hover:-translate-y-1"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1O9tWwzS1RkBYRYPnpfLheXk6Mgm15kb4/view?usp=sharing"
                  rel="noopener noreferrer"
                >
                  <Download size={18} className="mr-1" /> Download Resume
                </a>
              </Button>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/kanchanapallyswamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-portfolio-blue p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
                  aria-label="GitHub Profile"
                >
                  <Github
                    size={20}
                    className="text-black group-hover:text-white transition-colors"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/swamy-kanchanapally-411824301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-portfolio-blue p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin
                    size={20}
                    className="text-black group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="order-1 md:order-2 flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-blue via-portfolio-orange to-portfolio-blue rounded-full opacity-30 blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden border-4 border-portfolio-blue h-80 w-80 md:h-96 md:w-96 shadow-2xl transition-transform group-hover:scale-105">
                <img
                  src="/KVR.jpg"
                  alt="KVRSWAMY"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
