import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, Users, FileText, Settings, LogOut, Heart, Shield, TrendingUp, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Admin logged out",
      description: "You have been safely logged out of the admin panel.",
    });
    navigate("/");
  };

  const adminCards = [
    {
      icon: BarChart,
      title: "Anonymous Data Analytics",
      description: "View mental health trends, usage patterns, and platform insights",
      color: "bg-primary/10 hover:bg-primary/20",
      route: "/admin-dashboard/analytics",
      stats: "156 active users this week"
    },
    {
      icon: Calendar,
      title: "Appointments Management",
      description: "Manage counsellor bookings, schedules, and session approvals",
      color: "bg-secondary/10 hover:bg-secondary/20",
      route: "/admin-dashboard/appointments",
      stats: "23 pending appointments"
    },
    {
      icon: Users,
      title: "Peer Forum Moderation",
      description: "Monitor community posts, moderate content, and ensure safety",
      color: "bg-accent/10 hover:bg-accent/20",
      route: "/admin-dashboard/moderation",
      stats: "5 posts need review"
    },
    {
      icon: FileText,
      title: "Reports & Insights",
      description: "Generate reports, export data, and view intervention recommendations",
      color: "bg-success/10 hover:bg-success/20",
      route: "/admin-dashboard/reports",
      stats: "Weekly report ready"
    }
  ];

  const quickMetrics = [
    { 
      label: "Total Users", 
      value: "1,247", 
      change: "+12%", 
      color: "text-primary",
      trend: "up"
    },
    { 
      label: "Sessions Today", 
      value: "34", 
      change: "+8%", 
      color: "text-secondary",
      trend: "up"
    },
    { 
      label: "Forum Posts", 
      value: "89", 
      change: "-3%", 
      color: "text-accent",
      trend: "down"
    },
    { 
      label: "Urgent Cases", 
      value: "2", 
      change: "0%", 
      color: "text-warning",
      trend: "stable"
    }
  ];

  const recentAlerts = [
    {
      type: "warning",
      message: "Increased anxiety-related forum posts in the last 24h",
      time: "2 hours ago"
    },
    {
      type: "info",
      message: "Weekly mental health report is ready for review",
      time: "4 hours ago"
    },
    {
      type: "success",
      message: "New counsellor Sarah Johnson added to platform",
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Zen Logo" 
                  className="w-10 h-10"
                  />                </div>
                <span className="text-2xl font-bold text-foreground">Zen</span>
              </Link>
              <Badge variant="secondary" className="hidden md:flex">
                Admin Dashboard
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Monitor platform health and support student mental wellness initiatives
          </p>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickMetrics.map((metric, index) => (
            <Card key={index} className="wellness-card">
              <CardContent className="pt-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                  <div className={`text-sm flex items-center ${
                    metric.trend === 'up' ? 'text-success' : 
                    metric.trend === 'down' ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    {metric.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                    {metric.change}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Admin Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Management Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {adminCards.map((card, index) => (
                <Link key={index} to={card.route}>
                  <Card className={`feature-tile h-full ${card.color} transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <card.icon className="h-8 w-8 text-primary" />
                        <div className="text-sm text-muted-foreground">{card.stats}</div>
                      </div>
                      <CardTitle className="text-xl mb-2">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                        {card.description}
                      </CardDescription>
                      <Button variant="ghost" className="w-full justify-between group">
                        Access Tool
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Alerts */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Alerts</h2>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <Card key={index} className="wellness-card">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'warning' ? 'bg-warning' :
                        alert.type === 'info' ? 'bg-primary' : 'bg-success'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-foreground leading-relaxed mb-1">
                          {alert.message}
                        </p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="wellness-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Flag Urgent Case
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Moderate Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Health */}
        <div className="mt-12 bg-gradient-to-r from-success/5 to-primary/5 rounded-3xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">System Status: All Good ✅</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt; 100ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Data Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;