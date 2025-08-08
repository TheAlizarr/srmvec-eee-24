import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Search, Filter, Globe, Calculator, FlaskConical, Atom } from "lucide-react";
import { Input } from "@/components/ui/input";

const GeneralLibrary = () => {
  const categories = [
    {
      icon: Calculator,
      title: "Mathematics",
      books: 25,
      description: "Advanced mathematics for engineering applications"
    },
    {
      icon: Atom,
      title: "Physics",
      books: 20,
      description: "Engineering physics and applied physics concepts"
    },
    {
      icon: FlaskConical,
      title: "Chemistry",
      books: 15,
      description: "Engineering chemistry and materials science"
    },
    {
      icon: Globe,
      title: "English",
      books: 12,
      description: "Technical communication and professional English"
    },
    {
      icon: BookOpen,
      title: "General Aptitude",
      books: 18,
      description: "Reasoning, quantitative aptitude, and competitive exams"
    },
    {
      icon: BookOpen,
      title: "Soft Skills",
      books: 10,
      description: "Communication, leadership, and personality development"
    }
  ];

  const popularBooks = [
    { title: "Higher Engineering Mathematics - B.S. Grewal", category: "Mathematics", rating: "4.8" },
    { title: "Concepts of Physics - H.C. Verma", category: "Physics", rating: "4.9" },
    { title: "Engineering Chemistry - Jain & Jain", category: "Chemistry", rating: "4.5" },
    { title: "Technical Communication - Meenakshi Raman", category: "English", rating: "4.6" },
    { title: "Quantitative Aptitude - R.S. Aggarwal", category: "Aptitude", rating: "4.7" },
    { title: "Verbal & Non-Verbal Reasoning - R.S. Aggarwal", category: "Aptitude", rating: "4.6" }
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
                  General
                </span>
                <span className="text-foreground"> Library</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Essential books and resources for foundation subjects including Mathematics, 
                Physics, Chemistry, English, and General Aptitude for engineering students.
              </p>
            </div>

            {/* Search Section */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for books, notes, question papers..." 
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

        {/* Categories Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Browse by
              </span>
              <span className="text-foreground"> Category</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card 
                  key={category.title} 
                  className="group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-primary">
                        <category.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {category.books} books
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Books */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Popular
              </span>
              <span className="text-foreground"> Books</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBooks.map((book, index) => (
                <Card 
                  key={index} 
                  className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{book.title}</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-electric-blue">{book.category}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-yellow-400">★ {book.rating}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Quick
              </span>
              <span className="text-foreground"> Access</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Previous Year Papers</h3>
                  <p className="text-sm text-muted-foreground">University exam papers</p>
                </CardContent>
              </Card>

              <Card className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Solution Manuals</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step solutions</p>
                </CardContent>
              </Card>

              <Card className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Reference Materials</h3>
                  <p className="text-sm text-muted-foreground">Additional study resources</p>
                </CardContent>
              </Card>

              <Card className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Lab Manuals</h3>
                  <p className="text-sm text-muted-foreground">Practical lab guides</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">100+</div>
                <div className="text-muted-foreground">Total Books</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">6</div>
                <div className="text-muted-foreground">Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">25+</div>
                <div className="text-muted-foreground">Question Papers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-electric-blue">15+</div>
                <div className="text-muted-foreground">Lab Manuals</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GeneralLibrary;