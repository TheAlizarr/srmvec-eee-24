import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Download, Users, Calendar } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Course Materials",
      items: [
        { name: "Circuit Analysis Handbook", type: "PDF", size: "15 MB", downloads: "2.3k" },
        { name: "Digital Electronics Guide", type: "PDF", size: "22 MB", downloads: "1.8k" },
        { name: "Power Systems Fundamentals", type: "PDF", size: "18 MB", downloads: "1.5k" },
      ]
    },
    {
      icon: Video,
      title: "Video Lectures",
      items: [
        { name: "AC/DC Circuit Analysis", type: "Video", duration: "45 min", views: "12k" },
        { name: "Microcontroller Programming", type: "Video", duration: "60 min", views: "8.5k" },
        { name: "PCB Design Workshop", type: "Video", duration: "90 min", views: "6.2k" },
      ]
    },
    {
      icon: FileText,
      title: "Lab Manuals",
      items: [
        { name: "Electronics Lab Manual", type: "PDF", pages: "85", version: "v2.1" },
        { name: "Power Lab Procedures", type: "PDF", pages: "62", version: "v1.8" },
        { name: "Signal Processing Lab", type: "PDF", pages: "74", version: "v2.0" },
      ]
    }
  ];

  const announcements = [
    {
      title: "Midterm Exam Schedule",
      date: "2024-03-15",
      type: "Exam",
      priority: "high"
    },
    {
      title: "Guest Lecture: Industry 4.0",
      date: "2024-03-20",
      type: "Event",
      priority: "medium"
    },
    {
      title: "Project Submission Deadline",
      date: "2024-03-25",
      type: "Assignment",
      priority: "high"
    },
    {
      title: "Lab Equipment Maintenance",
      date: "2024-03-18",
      type: "Notice",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "low": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learning
            </span>
            <span className="text-foreground"> Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive study materials, video lectures, and lab manuals 
            to support your electrical and electronic engineering journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-elegant transition-all duration-500 border-border/20 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-tech-gray/30 hover:bg-tech-gray/50 transition-colors group/item"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover/item:text-electric-blue transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {'size' in item && `${item.size}`}
                          {'duration' in item && `${item.duration}`}
                          {'pages' in item && `${item.pages} pages`}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <Button variant="tesla" className="w-full mt-4">
                  View All {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-electric-blue" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  Announcements
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {announcements.map((announcement, index) => (
                <div 
                  key={index}
                  className="flex items-start justify-between p-4 rounded-lg bg-tech-gray/30 hover:bg-tech-gray/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">
                      {announcement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {announcement.type}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getPriorityColor(announcement.priority)}`}
                      >
                        {announcement.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="minimal" className="w-full">
                View All Announcements
              </Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-electric-blue" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  Quick Links
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {[
                "Student Portal Login",
                "Grade Management System",
                "Library Resources",
                "Lab Equipment Booking",
                "Research Publications",
                "Industry Partnerships",
                "Alumni Network",
                "Career Services"
              ].map((link, index) => (
                <Button 
                  key={index}
                  variant="minimal" 
                  className="w-full justify-start"
                >
                  {link}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;