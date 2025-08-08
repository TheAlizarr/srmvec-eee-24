import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, BookOpen, Users, Award, AlertTriangle } from "lucide-react";

const Updates = () => {
  const updates = [
    {
      id: 1,
      title: "Mid-Semester Exam Schedule Released",
      content: "The mid-semester examination schedule for all EEE subjects has been released. Exams will begin from March 15th, 2024.",
      type: "Exam",
      priority: "high",
      date: "2024-03-01",
      time: "09:30 AM",
      icon: AlertTriangle
    },
    {
      id: 2,
      title: "New Study Materials Added - Control Systems",
      content: "Latest reference books and previous year question papers for Control Systems have been added to the EEE Library.",
      type: "Library",
      priority: "medium",
      date: "2024-02-28",
      time: "02:15 PM",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Technical Symposium Registration Open",
      content: "Registration is now open for the annual EEE technical symposium 'Electron 2024'. Submit your papers by March 10th.",
      type: "Event",
      priority: "medium",
      date: "2024-02-25",
      time: "11:00 AM",
      icon: Users
    },
    {
      id: 4,
      title: "Lab Schedule Update - Power Electronics",
      content: "Power Electronics lab sessions have been rescheduled to Wednesdays and Fridays. Check the updated timetable.",
      type: "Academic",
      priority: "low",
      date: "2024-02-20",
      time: "04:30 PM",
      icon: CalendarDays
    },
    {
      id: 5,
      title: "Scholarship Application Deadline",
      content: "Last date to apply for merit-based scholarships is March 5th, 2024. Submit your applications through the student portal.",
      type: "Scholarship",
      priority: "high",
      date: "2024-02-18",
      time: "10:00 AM",
      icon: Award
    }
  ];

  const categories = [
    { name: "All", count: updates.length, active: true },
    { name: "Exam", count: 1, active: false },
    { name: "Library", count: 1, active: false },
    { name: "Event", count: 1, active: false },
    { name: "Academic", count: 1, active: false },
    { name: "Scholarship", count: 1, active: false }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "low": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Exam": return "bg-red-500/20 text-red-400";
      case "Library": return "bg-blue-500/20 text-blue-400";
      case "Event": return "bg-purple-500/20 text-purple-400";
      case "Academic": return "bg-green-500/20 text-green-400";
      case "Scholarship": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Latest
              </span>
              <span className="text-foreground"> Updates</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest academic announcements, exam schedules, 
              events, and important notifications for SRM VEC EEE students.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-card/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Badge
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                    category.active 
                      ? "bg-gradient-primary text-primary-foreground" 
                      : "border-border/20 hover:border-electric-blue/50"
                  }`}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Updates List */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {updates.map((update, index) => (
                <Card 
                  key={update.id} 
                  className={`border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 ${
                    update.priority === 'high' ? 'border-l-4 border-l-red-500' : 
                    update.priority === 'medium' ? 'border-l-4 border-l-yellow-500' : 
                    'border-l-4 border-l-green-500'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-primary">
                        <update.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {update.title}
                          </h3>
                          <Badge className={getPriorityColor(update.priority)}>
                            {update.priority.toUpperCase()}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {update.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-4 w-4" />
                              {new Date(update.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {update.time}
                            </div>
                          </div>
                          
                          <Badge className={getTypeColor(update.type)}>
                            {update.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription CTA */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Never Miss
              </span>
              <span className="text-foreground"> an Update</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get instant notifications for important announcements and updates 
              directly on your device.
            </p>
            
            <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-8 hover:shadow-card transition-all duration-300 max-w-lg mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Enable Notifications
              </h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with real-time notifications for exams, events, and academic announcements.
              </p>
              <div className="text-electric-blue font-medium">
                Coming Soon - Push Notifications
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;