import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const AboutPage = () => {
  const teamValues = [
    {
      icon: Users,
      title: "Student-Centric",
      description: "Built by students, for students. We understand your academic challenges and needs."
    },
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Focused on helping you achieve the best results in your EEE studies."
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Fostering a supportive community where knowledge sharing thrives."
    },
    {
      icon: Award,
      title: "Quality Resources",
      description: "Curated, verified, and high-quality study materials and resources."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About
              </span>
              <span className="text-foreground"> Our Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering SRM VEC EEE students with comprehensive digital resources, 
              AI assistance, and a collaborative learning environment.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a comprehensive digital ecosystem that supports SRM VEC EEE students 
                    throughout their academic journey by providing easy access to study materials, 
                    AI-powered assistance, and real-time updates on academic activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the ultimate academic companion for electrical engineering students, 
                    fostering a culture of collaborative learning, academic excellence, and 
                    technological innovation within our community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Our
                </span>
                <span className="text-foreground"> Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-2xl bg-gradient-primary">
                        <value.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Student
              </span>
              <span className="text-foreground"> Developers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              This platform is proudly developed and maintained by passionate EEE students 
              from SRM VEC who understand the challenges of electrical engineering studies.
            </p>
            
            <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-8 hover:shadow-card transition-all duration-300 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Join Our Development Team</h3>
                <p className="text-muted-foreground">
                  Interested in contributing to this platform? We welcome fellow EEE students 
                  who want to improve the academic experience for our community.
                </p>
                <div className="text-electric-blue font-medium">
                  Contact us to get involved!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;