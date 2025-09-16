import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Bot, BookOpen, Calendar, Headphones, Users, Trophy, Heart, User, LogOut, Settings, Flame, Gem, Star, CheckCircle, Smile, Meh, Frown, Target, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been safely logged out. Take care!",
    });
    navigate("/");
  };

  // Mock data for demonstration
  const studentName = "Alex";
  const currentStreak = 7;
  const totalCredits = 245;
  const moodToday = "happy";

  // Daily routine tracker data
  const dailyTasks = [
    { id: 1, task: "Morning Check-in", completed: true, icon: CheckCircle },
    { id: 2, task: "Hydration Goal", completed: true, icon: CheckCircle },
    { id: 3, task: "Study Break", completed: false, icon: Target },
    { id: 4, task: "Evening Reflection", completed: false, icon: Target }
  ];

  // Quick stats with enhanced gamification
  const quickStats = [
    { 
      label: "Current Streak", 
      value: `${currentStreak}`, 
      icon: Flame, 
      color: "text-primary",
      suffix: "days",
      progress: 70 
    },
    { 
      label: "Wellness Credits", 
      value: totalCredits.toString(), 
      icon: Gem, 
      color: "text-success",
      suffix: "pts" 
    },
    { 
      label: "Mood Trend", 
      value: "Improving", 
      icon: TrendingUp, 
      color: "text-accent",
      trend: "+20%" 
    },
    { 
      label: "Badges Earned", 
      value: "8", 
      icon: Trophy, 
      color: "text-warning",
      suffix: "badges" 
    }
  ];

  // Feature tiles with updated design
  const featureTiles = [
    {
      icon: Bot,
      title: "AI Chat Support",
      description: "Get instant support and coping strategies from our AI counselor",
      emoji: "🤖",
      color: "bg-gradient-to-br from-primary/10 to-primary/20",
      route: "/student-dashboard/ai-chat",
      highlight: true
    },
    {
      icon: Target,
      title: "Daily Routine",
      description: "Track your daily wellness habits and build healthy streaks",
      emoji: "📋",
      color: "bg-gradient-to-br from-secondary/10 to-secondary/20",
      route: "/student-dashboard/routine"
    },
    {
      icon: BookOpen,
      title: "Mood Tracker",
      description: "Log your emotions and discover patterns in your mental wellness",
      emoji: "😊",
      color: "bg-gradient-to-br from-accent/10 to-accent/20",
      route: "/student-dashboard/mood-journal"
    },
    {
      icon: Calendar,
      title: "Book Counsellor",
      description: "Schedule confidential sessions with qualified mental health professionals",
      emoji: "🗓️",
      color: "bg-gradient-to-br from-success/10 to-success/20",
      route: "/student-dashboard/booking"
    },
    {
      icon: Headphones,
      title: "Resources Hub",
      description: "Access curated videos, podcasts, and mental health guides in your language",
      emoji: "🎧",
      color: "bg-gradient-to-br from-warning/10 to-warning/20",
      route: "/student-dashboard/resources"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "View your earned badges and track progress milestones",
      emoji: "🏆",
      color: "bg-gradient-to-br from-primary/10 to-accent/20",
      route: "/student-dashboard/achievements"
    }
  ];

  // Earned badges
  const recentBadges = [
    { name: "7-Day Streak", emoji: "🔥", description: "Maintained 7-day routine" },
    { name: "First Journal", emoji: "📖", description: "Completed first mood entry" },
    { name: "Self-Care Star", emoji: "⭐", description: "Completed 5 wellness tasks" }
  ];

  // Mood options for quick logging
  const moodOptions = [
    { emoji: "😊", label: "Great", value: "great" },
    { emoji: "🙂", label: "Good", value: "good" },
    { emoji: "😐", label: "Okay", value: "okay" },
    { emoji: "😔", label: "Down", value: "down" },
    { emoji: "😟", label: "Struggling", value: "struggling" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-gentle">
                  <img 
                  src="/logo.png" 
                  alt="Zen Logo" 
                  className="w-10 h-10"
                  />
                </div>
                <span className="text-2xl font-bold text-foreground">Zen</span>
              </Link>
              <Badge variant="secondary" className="hidden md:flex">
                Student Dashboard
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Gem className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-success">{totalCredits} Credits</span>
              </div>
              <Button variant="ghost" size="sm" className="rounded-xl">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-xl">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section with Daily Mood */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div>
              <h1 className="text-6xl font-bold text-foreground mb-2">
                Good morning, {studentName}! ☀️
              </h1>
              <p className="text-2xl text-muted-foreground mb-16">
                You're on a <span className="text-primary font-semibold">{currentStreak}-day streak</span> - keep it going! 🔥
              </p>
              <div className="flex items-center gap-2 text-xl text-muted-foreground">
                <span>How are you feeling today?</span>
                <div className="flex gap-16 ml-2">
                  {moodOptions.map((mood, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="lg"
                      className="text-4xl p-2 h-auto rounded-xl hover:scale-110 transition-transform"
                    >
                      {mood.emoji}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Daily Task Completion */}
            <Card className="wellness-card lg:w-80">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Today's Wellness Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dailyTasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-3">
                      <task.icon className={`h-4 w-4 ${task.completed ? 'text-success' : 'text-muted-foreground'}`} />
                      <span className={`text-sm ${task.completed ? 'text-foreground line-through' : 'text-muted-foreground'}`}>
                        {task.task}
                      </span>
                    </div>
                  ))}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>2/4 completed</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="wellness-card text-center group hover:scale-105">
              <CardContent className="pt-6 pb-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                  {stat.suffix && <span className="text-sm ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                {stat.progress && (
                  <div className="mt-3">
                    <Progress value={stat.progress} className="h-1.5" />
                  </div>
                )}
                {stat.trend && (
                  <div className="text-xs text-success mt-1">{stat.trend}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Tiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featureTiles.map((tile, index) => (
            <Link key={index} to={tile.route}>
              <Card className={`feature-tile h-full ${tile.color} transition-all duration-300 ${tile.highlight ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl animate-pulse">{tile.emoji}</div>
                    <div className={`p-2 rounded-xl ${tile.highlight ? 'bg-primary/20' : 'bg-background/50'}`}>
                      <tile.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    {tile.title}
                    {tile.highlight && <Badge variant="secondary" className="text-xs">Popular</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {tile.description}
                  </CardDescription>
                  <Button variant="ghost" className="w-full justify-between group rounded-xl ">
                    Access Feature
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Badges & Credits Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="wellness-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {recentBadges.map((badge, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {badge.emoji}
                    </div>
                    <div className="text-xs font-medium text-foreground">{badge.name}</div>
                    <div className="text-xs text-muted-foreground">{badge.description}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 rounded-xl">
                <Trophy className="h-4 w-4 mr-2" />
                View All Badges
              </Button>
            </CardContent>
          </Card>

          <Card className="wellness-card bg-gradient-to-br from-success/5 to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gem className="h-5 w-5 text-success" />
                Wellness Credits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-success mb-2">{totalCredits}</div>
                <div className="text-sm text-muted-foreground mb-4">Available Credits</div>
                <div className="text-xs text-muted-foreground">
                  Earn credits by completing daily tasks, maintaining streaks, and engaging with resources
                </div>
              </div>
              <Button className="w-full rounded-xl bg-success hover:bg-success/90">
                <Star className="h-4 w-4 mr-2" />
                Redeem Credits
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="wellness-card bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Need immediate support?</h2>
              <p className="text-muted-foreground mb-6">We're here to help you through any challenge</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/student-dashboard/ai-chat">
                  <Button size="lg" className="hero-button">
                    <Bot className="h-5 w-5 mr-2" />
                    Start AI Chat
                  </Button>
                </Link>
                <Link to="/student-dashboard/booking">
                  <Button variant="outline" size="lg" className="border-primary/20 rounded-xl">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Counsellor
                  </Button>
                </Link>
              </div>
              <div className="mt-6 p-4 bg-destructive/10 rounded-xl">
                <p className="text-sm text-destructive font-medium">
                  🚨 Crisis Support: Call 112 for immediate help
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Navigation for Peer Forum */}
        <div className="mt-8">
          <Link to="/student-dashboard/forum">
            <Card className="wellness-card bg-gradient-to-r from-secondary/10 to-accent/10 hover:scale-[1.01] cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-secondary/20">
                      <Users className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Peer Support Community</h3>
                      <p className="text-sm text-muted-foreground">Connect with fellow students in a safe space</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="rounded-xl">
                    Join Community →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;