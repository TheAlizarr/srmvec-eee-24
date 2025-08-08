import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electrical and Electronic Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SRM VEC EEE
            </span>
            <br />
            <span className="text-foreground">
              Student Hub
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Your personal academic companion for EEE studies. Access resources, 
            stay updated, and excel in your electrical engineering journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              EEE Library
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="tesla" size="lg">
              AI Chatbot
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-in">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card/10 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300">
              <Zap className="h-8 w-8 text-electric-blue mx-auto mb-4 animate-glow" />
              <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
              <p className="text-muted-foreground">Study Materials</p>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card/10 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300">
              <BookOpen className="h-8 w-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">AI Assistant</p>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card/10 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300">
              <Users className="h-8 w-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Daily</h3>
              <p className="text-muted-foreground">Updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-electric-blue/30 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-electric-blue/20 rounded-lg animate-float animation-delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;