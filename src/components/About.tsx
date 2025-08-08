import { Card, CardContent } from "@/components/ui/card";
import { CircuitBoard, Cpu, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CircuitBoard,
      title: "EEE Library",
      description: "Comprehensive collection of electrical engineering textbooks, papers, and study materials."
    },
    {
      icon: Cpu,
      title: "AI Chatbot",
      description: "24/7 intelligent assistant to help with queries, doubts, and academic guidance."
    },
    {
      icon: Lightbulb,
      title: "Study Resources",
      description: "Curated notes, previous papers, and reference materials for all EEE subjects."
    },
    {
      icon: Rocket,
      title: "Real-time Updates",
      description: "Stay informed with the latest academic announcements, events, and opportunities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Our
            </span>
            <span className="text-foreground"> Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive digital hub created by SRM VEC EEE students to support 
            your academic journey with curated resources, AI assistance, and real-time updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-2xl bg-gradient-primary">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Why Use Our Platform?
            </h3>
            <ul className="space-y-4">
              {[
                "Curated by fellow EEE students for students",
                "AI-powered assistance for instant help",
                "Comprehensive resource library and materials",
                "Real-time updates on academic events",
                "Easy access to all study materials in one place"
              ].map((point, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-glow"></div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-8 hover:shadow-card transition-all duration-300">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-electric-blue">500+</div>
                  <div className="text-sm text-muted-foreground">Resources</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-electric-blue">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Support</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-electric-blue">100+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-electric-blue">Daily</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;