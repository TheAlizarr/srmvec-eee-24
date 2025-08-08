import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, MessageSquare, Lightbulb, BookOpen, Calculator } from "lucide-react";
import { useState } from "react";

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI assistant for EEE studies. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickActions = [
    {
      icon: BookOpen,
      title: "Explain Concepts",
      description: "Get detailed explanations of EEE topics",
      example: "Explain Kirchhoff's voltage law"
    },
    {
      icon: Calculator,
      title: "Solve Problems",
      description: "Step-by-step problem solving",
      example: "Solve this circuit analysis problem"
    },
    {
      icon: Lightbulb,
      title: "Study Tips",
      description: "Get personalized study recommendations",
      example: "How to prepare for Power Systems exam?"
    },
    {
      icon: MessageSquare,
      title: "General Help",
      description: "Ask anything about your studies",
      example: "What are the career options in EEE?"
    }
  ];

  const sampleQuestions = [
    "What is the difference between AC and DC?",
    "How do I solve mesh analysis problems?",
    "Explain the working of a transformer",
    "What are the applications of digital electronics?",
    "How to prepare for circuit theory exam?",
    "What is the principle of electromagnetic induction?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputValue,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: "Thank you for your question! I'm currently being developed to provide comprehensive assistance with EEE topics. Soon I'll be able to help you with detailed explanations, problem solving, and study guidance.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickAction = (example: string) => {
    setInputValue(example);
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
                AI
              </span>
              <span className="text-foreground"> Chatbot</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your 24/7 intelligent study companion for electrical engineering. 
              Get instant help with concepts, problems, and academic guidance.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 bg-card/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                What can I help you with?
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Card 
                  key={action.title} 
                  className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer group"
                  onClick={() => handleQuickAction(action.example)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-2xl bg-gradient-primary group-hover:scale-110 transition-transform">
                        <action.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {action.description}
                    </p>
                    <p className="text-xs text-electric-blue italic">
                      "{action.example}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 ${
                        message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      <div className={`p-2 rounded-full ${
                        message.type === 'user' 
                          ? 'bg-electric-blue/20' 
                          : 'bg-gradient-primary'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="h-4 w-4 text-electric-blue" />
                        ) : (
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                      
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-electric-blue/10 text-foreground'
                          : 'bg-muted/50 text-foreground'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-border/20 p-6">
                  <div className="flex gap-4">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything about EEE topics..."
                      className="flex-1 bg-background/50 border-border/20"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      variant="tesla"
                      size="icon"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sample Questions */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Popular
              </span>
              <span className="text-foreground"> Questions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleQuestions.map((question, index) => (
                <Card 
                  key={index} 
                  className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer group"
                  onClick={() => handleQuickAction(question)}
                >
                  <CardContent className="p-4">
                    <p className="text-sm text-foreground group-hover:text-electric-blue transition-colors">
                      "{question}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Features
              </span>
              <span className="text-foreground"> Coming Soon</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl">🧠</div>
                <h3 className="text-xl font-semibold text-foreground">Smart Learning</h3>
                <p className="text-muted-foreground">
                  Personalized learning paths based on your progress and interests
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl">📊</div>
                <h3 className="text-xl font-semibold text-foreground">Problem Solving</h3>
                <p className="text-muted-foreground">
                  Step-by-step solutions with detailed explanations
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-xl font-semibold text-foreground">Exam Preparation</h3>
                <p className="text-muted-foreground">
                  Targeted practice questions and study recommendations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIChatbot;