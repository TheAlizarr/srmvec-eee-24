import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system using Arduino and ESP32 modules for controlling lights, temperature, and security.",
      technologies: ["Arduino", "ESP32", "IoT", "Mobile App"],
      featured: true,
      status: "Active"
    },
    {
      title: "Solar Power Optimizer",
      description: "MPPT charge controller design for maximum solar panel efficiency with real-time monitoring capabilities.",
      technologies: ["Power Electronics", "PCB Design", "MPPT", "Monitoring"],
      featured: true,
      status: "Completed"
    },
    {
      title: "Wireless Sensor Network",
      description: "Multi-node sensor network for environmental monitoring using LoRa communication protocol.",
      technologies: ["LoRa", "Sensors", "Wireless", "Data Analytics"],
      featured: false,
      status: "In Progress"
    },
    {
      title: "Digital Signal Processor",
      description: "Custom DSP implementation for audio processing applications with FPGA-based acceleration.",
      technologies: ["FPGA", "DSP", "Audio", "Verilog"],
      featured: false,
      status: "Active"
    },
    {
      title: "EV Charging Station",
      description: "Fast-charging station design with smart grid integration and mobile payment system.",
      technologies: ["Power Systems", "Smart Grid", "Mobile", "Payments"],
      featured: true,
      status: "Planning"
    },
    {
      title: "Robotic Arm Control",
      description: "6-DOF robotic arm with computer vision for precise object manipulation and assembly tasks.",
      technologies: ["Robotics", "Computer Vision", "Control Systems", "AI"],
      featured: false,
      status: "Active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-electric-blue/20 text-electric-blue border-electric-blue/30";
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planning": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Student </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover innovative projects created by our students, showcasing practical 
            applications of electrical and electronic engineering principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105 ${
                project.featured ? 'ring-2 ring-electric-blue/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Star className="h-5 w-5 text-electric-blue fill-electric-blue" />
                  )}
                </div>
                <Badge 
                  variant="outline" 
                  className={`w-fit ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-tech-gray/50 text-foreground border-border/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button variant="minimal" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="tesla" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;