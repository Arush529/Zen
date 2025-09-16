import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BookOpen, Calendar, Headphones, Users, Trophy, ArrowRight, Heart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wellness.jpg";

const LandingPage = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Chat Support",
      description: "24/7 intelligent chat support with coping strategies and confidential guidance"
    },
    {
      icon: BookOpen,
      title: "Mood Tracker",
      description: "Track your emotional journey with private journaling and insightful analytics"
    },
    {
      icon: Calendar,
      title: "Counselor Booking",
      description: "Easy, confidential appointment scheduling with qualified mental health professionals"
    },
    {
      icon: Headphones,
      title: "Wellness Resources",
      description: "Curated collection of videos, podcasts, and guides for mental wellbeing"
    },
    {
      icon: Users,
      title: "Peer Support Forum",
      description: "Connect with others in a safe, moderated community environment"
    },
    {
      icon: Trophy,
      title: "Wellness Gamification",
      description: "Earn badges and track progress on your mental wellness journey"
    }
  ];

  const stats = [
    { icon: Heart, number: "10k+", label: "Students Supported" },
    { icon: Shield, number: "100%", label: "Confidential & Secure" },
    { icon: Zap, number: "24/7", label: "Always Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10  rounded-2xl flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Zen Logo" 
                  className="w-10 h-10"
                  />
              </div>
              <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "Michroma&family"}}>zen</span>
            </div>
            <Link to="/login">
              <Button variant="outline" className="text-lg px-8 py-4 rounded-xl font-semibold
             bg-gradient-to-r from-purple-500 to-indigo-500 text-white
             hover:text-white
             shadow-lg transition-all transform
             hover:scale-105 hover:shadow-xl">
                Sign In / Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your Safe Space for{" "}
                <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                  Mental Wellness
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                A stigma-free platform designed for students to access mental health support, 
                connect with peers, and build resilience in a safe, confidential environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button variant="outline"className="text-lg px-8 py-4 rounded-xl font-semibold
             bg-gradient-to-r from-pink-500 to-yellow-400 text-white 
             shadow-lg transition-all transform 
             hover:scale-105 hover:shadow-xl hover:text-white">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/learn-more">
                  <Button variant="outline" className="text-lg px-8 py-4 rounded-xl font-semibold
             bg-gradient-to-r from-pink-500 to-yellow-400 text-white 
             shadow-lg transition-all transform 
             hover:scale-105 hover:shadow-xl hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Peaceful wellness illustration" 
                className="rounded-3xl shadow-floating w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Why Mental Wellness Matters</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Student mental health is a growing concern. Our platform bridges the gap between 
            students and support services, removing barriers and reducing stigma through 
            technology and community.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Wellness Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access everything you need for mental wellness in one secure, confidential platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="wellness-card h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10  rounded-2xl flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Zen Logo" 
                  className="w-10 h-10"
                  />
              </div>
              <span className="text-2xl font-bold text-foreground">zen</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Crisis Helpline:</strong> 112 (24/7 National Suicide Prevention Lifeline)</p>
              <p><strong>Campus Support:</strong> contact@zen.edu</p>
              <p className="text-sm mt-6">
                If you're experiencing a mental health emergency, please call 112 or go to your nearest emergency room.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              <p>&copy; 2025 zen. All rights reserved. Your privacy and wellbeing are our priority.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
