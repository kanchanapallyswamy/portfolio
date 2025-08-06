import { useState } from 'react';
import { Linkedin, Mail, Phone, Github, SendHorizonal, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="text-portfolio-blue" size={24} />,
      title: "Email",
      value: "kanchanapallyswamy@gmail.com",
      link: "mailto:kanchanapallyswamy@gmail.com",
    },
    {
      id: 2,
      icon: <Phone className="text-portfolio-blue" size={24} />,
      title: "Phone",
      value: "+91 9640074089",
      link: "tel:+919640074089",
    },
    {
      id: 3,
      icon: <Linkedin className="text-portfolio-blue" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/swamy-kanchanapally-411824301",
      link: "https://www.linkedin.com/in/swamy-kanchanapally-411824301/",
    },
    {
      id: 4,
      icon: <Github className="text-portfolio-blue" size={24} />,
      title: "GitHub",
      value: "github.com/kanchanapallyswamy",
      link: "https://github.com/kanchanapallyswamy",
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/10 to-transparent -z-20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-portfolio-blue/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-portfolio-orange/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="bg-gradient-to-r from-portfolio-blue/20 to-portfolio-orange/20 text-portfolio-blue px-6 py-2 rounded-full text-sm font-medium border border-portfolio-blue/30 backdrop-blur-sm">
            ✨ Contact Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-portfolio-blue to-portfolio-orange bg-clip-text text-transparent my-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-orange rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Ready to turn ideas into reality? Let's connect and discuss how we can collaborate on your next innovative project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {contactInfo.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border border-gray-800 bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-portfolio-blue transition-all duration-300"
              >
                <CardContent className="p-6">
                  <a
                    href={item.link}
                    target={item.id > 2 ? "_blank" : undefined}
                    rel={item.id > 2 ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-portfolio-lightBlue/20 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 group-hover:text-portfolio-blue transition-colors flex items-center gap-2">
                        {item.value} <ExternalLink size={16} className="opacity-70 group-hover:opacity-100" />
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="overflow-hidden border border-gray-800 bg-gray-900 shadow-xl">
              <div className="h-1 w-full bg-gradient-to-r from-portfolio-blue to-portfolio-orange"></div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent resize-none"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white font-medium py-4 transition-all duration-300 shadow-lg hover:shadow-portfolio-blue/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (<><SendHorizonal size={18} /> Send Message</>)}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
