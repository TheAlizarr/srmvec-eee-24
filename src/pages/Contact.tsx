import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Users, Github, Instagram, Linkedin } from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email for detailed queries",
      contact: "srmvec.eee.students@gmail.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Group",
      description: "Join our community for quick updates",
      contact: "+91 XXXXX XXXXX",
      action: "Join Group"
    },
    {
      icon: Users,
      title: "Student Forum",
      description: "Connect with fellow EEE students",
      contact: "EEE Student Community",
      action: "Join Forum"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@srmvec_eee_students",
      url: "#"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "SRM VEC EEE Students",
      url: "#"
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "srmvec-eee",
      url: "#"
    }
  ];

  const faqs = [
    {
      question: "How can I contribute to this platform?",
      answer: "We welcome contributions from fellow EEE students! You can contribute by sharing study materials, reporting bugs, or helping with development. Contact us to get involved."
    },
    {
      question: "Is this platform free to use?",
      answer: "Yes, this platform is completely free for all SRM VEC EEE students. It's built by students, for students."
    },
    {
      question: "How often is the content updated?",
      answer: "We regularly update the platform with new study materials, exam updates, and announcements. Check the Updates page for the latest information."
    },
    {
      question: "Can I request specific study materials?",
      answer: "Absolutely! You can request specific books, papers, or materials by contacting us through any of the available channels."
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
                Get in
              </span>
              <span className="text-foreground"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, suggestions, or want to contribute? We'd love to hear from you. 
              Connect with our student community and help make this platform better.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Contact
              </span>
              <span className="text-foreground"> Methods</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title} 
                  className="group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-2xl bg-gradient-primary">
                        <method.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="text-electric-blue font-medium mb-6">
                      {method.contact}
                    </p>
                    <Button variant="outline" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Send us a
                </span>
                <span className="text-foreground"> Message</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input 
                        placeholder="Enter your name" 
                        className="bg-background/50 border-border/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-background/50 border-border/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="What's this about?" 
                      className="bg-background/50 border-border/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your query or suggestion..." 
                      rows={6}
                      className="bg-background/50 border-border/20"
                    />
                  </div>

                  <Button variant="tesla" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Follow
              </span>
              <span className="text-foreground"> Us</span>
            </h2>

            <div className="flex justify-center gap-8">
              {socialLinks.map((social) => (
                <Card 
                  key={social.name} 
                  className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer group w-48"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-2xl bg-gradient-primary group-hover:scale-110 transition-transform">
                        <social.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {social.name}
                    </h3>
                    <p className="text-sm text-electric-blue">
                      {social.handle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <span className="text-foreground"> Questions</span>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className="border-border/20 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;