import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  ArrowLeft, 
  CheckCircle, 
  Shield, 
  Users, 
  Clock, 
  Brain, 
  Lightbulb,
  Target,
  Star,
  Award,
  BookOpen,
  MessageCircle,
  Calendar,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Privacy & Confidentiality",
      description: "Your data is encrypted and protected. Anonymous options available for sensitive conversations."
    },
    {
      icon: Clock,
      title: "24/7 Accessibility",
      description: "Mental health support doesn't follow business hours. Access help whenever you need it most."
    },
    {
      icon: Users,
      title: "Peer-to-Peer Support",
      description: "Connect with fellow students who understand your challenges in a moderated, safe environment."
    },
    {
      icon: Brain,
      title: "Evidence-Based Approaches",
      description: "All resources and strategies are grounded in proven psychological research and best practices."
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "AI Chat Support",
      description: "Intelligent conversational support that provides coping strategies, resources, and can escalate to human counselors when needed.",
      highlights: ["Immediate response", "Personalized strategies", "Crisis detection", "Seamless handoff to professionals"]
    },
    {
      icon: BookOpen,
      title: "Mood Journal & Analytics",
      description: "Track your emotional patterns, identify triggers, and celebrate progress with insightful visualizations.",
      highlights: ["Daily mood tracking", "Trend analysis", "Trigger identification", "Progress visualization"]
    },
    {
      icon: Calendar,
      title: "Professional Counselor Booking",
      description: "Schedule confidential appointments with licensed mental health professionals right from your dashboard.",
      highlights: ["Licensed professionals", "Flexible scheduling", "Video or in-person", "Insurance integration"]
    },
    {
      icon: Headphones,
      title: "Wellness Resource Library",
      description: "Curated collection of guided meditations, educational videos, self-help guides, and wellness tools.",
      highlights: ["Guided meditations", "Educational content", "Self-help tools", "Offline access"]
    }
  ];

  const stats = [
    { number: "89%", label: "of students report reduced anxiety after using our platform" },
    { number: "95%", label: "feel more comfortable seeking help through digital channels" },
    { number: "78%", label: "continue using wellness strategies learned on the platform" },
    { number: "24/7", label: "availability ensures help is always accessible" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10  rounded-2xl flex items-center justify-center">
                  <img 
                  src="/logo.png" 
                  alt="Zen Logo" 
                  className="w-10 h-10"
                  />
                </div>
                <span className="text-2xl font-bold text-foreground">zen</span>
              </div>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Learn More About zen</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Student{" "}
            <span className="bg-gradient-to-r from-pink-300 to-yellow-400 bg-clip-text text-transparent">
              Mental Health
            </span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Discover how our comprehensive platform is revolutionizing mental wellness support 
            for students, removing barriers and reducing stigma through innovative technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Proven Impact on Student Wellbeing</h2>
            <p className="text-lg text-muted-foreground">Real results from students who've used zen</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center wellness-card">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose zen?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've designed every aspect of our platform with student needs and privacy at the forefront
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="wellness-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Feature Set</h2>
            <p className="text-xl text-muted-foreground">
              Every tool you need for mental wellness, thoughtfully integrated into one platform
            </p>
          </div>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <Card key={index} className="wellness-card">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {feature.description}
                      </p>
                    </div>
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Getting started with your mental wellness journey is simple and secure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sign Up Anonymously</h3>
              <p className="text-muted-foreground">
                Create your account with complete privacy. Use a pseudonym or remain completely anonymous.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Explore & Connect</h3>
              <p className="text-muted-foreground">
                Access resources, start conversations, track your mood, and connect with the community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Build Wellness Habits</h3>
              <p className="text-muted-foreground">
                Develop healthy coping strategies and build resilience with ongoing support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have found support, community, and healing through zen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="hero-button text-lg px-8 py-4">
                Get Started Now <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="text-lg px-8 py-4">
                Back to Home
              </Button>
            </Link>
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

export default LearnMore;