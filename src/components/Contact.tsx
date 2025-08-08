import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Department Location",
      details: ["Electrical Engineering Building", "Room 301, 3rd Floor", "University Campus"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Fax: +1 (555) 123-4569"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["eee.dept@university.edu", "admin.eee@university.edu", "projects@university.edu"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"]
    }
  ];

  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Department Head",
      specialization: "Power Systems & Renewable Energy",
      email: "s.johnson@university.edu"
    },
    {
      name: "Prof. Michael Chen",
      title: "Associate Professor",
      specialization: "Digital Signal Processing",
      email: "m.chen@university.edu"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Assistant Professor",
      specialization: "Embedded Systems & IoT",
      email: "e.rodriguez@university.edu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our EEE program? Need assistance with coursework? 
            Our faculty and staff are here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                <Send className="h-6 w-6 text-electric-blue mr-3" />
                Send Message
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name"
                    className="bg-tech-gray/50 border-border/30 focus:border-electric-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="bg-tech-gray/50 border-border/30 focus:border-electric-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-tech-gray/50 border-border/30 focus:border-electric-blue"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="bg-tech-gray/50 border-border/30 focus:border-electric-blue"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="bg-tech-gray/50 border-border/30 focus:border-electric-blue resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-gradient-primary">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Faculty Members */}
            <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Faculty Members
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {facultyMembers.map((faculty, index) => (
                  <div 
                    key={faculty.name}
                    className="p-4 rounded-lg bg-tech-gray/30 hover:bg-tech-gray/50 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-1">
                      {faculty.name}
                    </h4>
                    <p className="text-sm text-electric-blue mb-1">
                      {faculty.title}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {faculty.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {faculty.email}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="tesla" size="lg" className="w-full">
                Schedule Appointment
              </Button>
              <Button variant="minimal" size="lg" className="w-full">
                Virtual Office Hours
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;