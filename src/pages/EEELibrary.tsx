import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const EEELibrary = () => {
  const subjects = [
    {
      title: "Circuit Theory",
      books: 15,
      papers: 8,
      description: "Fundamental circuit analysis and network theory"
    },
    {
      title: "Power Systems",
      books: 12,
      papers: 10,
      description: "Generation, transmission and distribution of electrical power"
    },
    {
      title: "Digital Electronics",
      books: 10,
      papers: 6,
      description: "Digital logic design and microprocessor systems"
    },
    {
      title: "Control Systems",
      books: 8,
      papers: 7,
      description: "Automatic control systems and feedback theory"
    },
    {
      title: "Electromagnetic Fields",
      books: 9,
      papers: 5,
      description: "Electromagnetic theory and wave propagation"
    },
    {
      title: "Machines & Drives",
      books: 11,
      papers: 9,
      description: "Electrical machines and motor drive systems"
    }
  ];

  const recentUploads = [
    { title: "Network Analysis by Van Valkenburg", type: "Book", subject: "Circuit Theory" },
    { title: "Power System Analysis - 2023 Paper", type: "Previous Year", subject: "Power Systems" },
    { title: "Digital Logic Design Notes", type: "Notes", subject: "Digital Electronics" },
    { title: "Control Systems Lab Manual", type: "Lab Manual", subject: "Control Systems" }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  EEE
                </span>
                <span className="text-foreground"> Library</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive collection of electrical engineering textbooks, research papers, 
                previous year questions, and study materials - all in one place.
              </p>
            </div>

            {/* Search Section */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for books, papers, notes..." 
                    className="pl-10 bg-card/50 border-border/20"
                  />
                </div>
                <Button variant="tesla" size="lg">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Browse by
              </span>
              <span className="text-foreground"> Subject</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <Card 
                  key={subject.title} 
                  className="group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <BookOpen className="h-8 w-8 text-electric-blue" />
                      <div className="text-sm text-muted-foreground">
                        {subject.books + subject.papers} items
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {subject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {subject.description}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-electric-blue">{subject.books} Books</span>
                      <span className="text-electric-blue">{subject.papers} Papers</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Uploads */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Recent
              </span>
              <span className="text-foreground"> Uploads</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {recentUploads.map((item, index) => (
                <Card 
                  key={index} 
                  className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <div className="flex gap-2 text-sm">
                          <span className="text-electric-blue">{item.type}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{item.subject}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">85+</div>
                <div className="text-muted-foreground">Textbooks</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">45+</div>
                <div className="text-muted-foreground">Research Papers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">30+</div>
                <div className="text-muted-foreground">Previous Years</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">50+</div>
                <div className="text-muted-foreground">Study Notes</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EEELibrary;