import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Shield, Heart, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState<"student" | "admin" | null>(null);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStudentLogin = () => {
    toast({
      title: "Success!",
      description: "Logged in successfully with college email.",
    });
    navigate("/student-dashboard");
  };

  const handleStudentRegister = () => {
    toast({
      title: "Registration Successful!",
      description: "Student account created successfully. Please sign in.",
    });
    setIsRegister(false);
  };

  const handleAdminLogin = () => {
    toast({
      title: "Admin Access",
      description: "Logged in as administrator.",
    });
    navigate("/admin-dashboard");
  };

  const handleAdminRegister = () => {
    toast({
      title: "Registration Successful!",
      description: "Admin account created successfully. Please sign in.",
    });
    setIsRegister(false);
  };

  return (
    <div className="min-h-screen bg-background hero-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
              <img 
                  src="/logo.png" 
                  alt="Zen Logo" 
                  className="w-10 h-10"
                  />
            </div>
            <span className="text-3xl font-bold text-white">Zen</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/90 text-lg">Choose your access type to continue</p>
        </div>

        {!selectedRole && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Login Card */}
            <Card 
              className="wellness-card cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300"
              onClick={() => setSelectedRole("student")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Student Access</CardTitle>
                <CardDescription className="text-lg">
                  Access mental wellness resources, chat support, and peer community
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Secure college email access
                  </div>
                  <div className="flex items-center justify-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Safe, stigma-free environment
                  </div>
                </div>
                <Button className="w-full mt-6 hero-button">
                  Continue as Student
                </Button>
              </CardContent>
            </Card>

            {/* Admin Login Card */}
            <Card 
              className="wellness-card cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300"
              onClick={() => setSelectedRole("admin")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Admin Access</CardTitle>
                <CardDescription className="text-lg">
                  Manage platform, view analytics, and moderate community
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>Analytics & Reports</div>
                  <div>Appointment Management</div>
                  <div>Community Moderation</div>
                </div>
                <Button className="w-full mt-6 hero-button">
                  Continue as Admin
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Student Login/Register */}
        {selectedRole === "student" && (
          <Card className="wellness-card max-w-md mx-auto">
            <CardHeader className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedRole(null);
                  setIsRegister(false);
                }}
                className="absolute left-4 top-4 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-2xl">
                {isRegister ? "Student Registration" : "Student Login"}
              </CardTitle>
              <CardDescription>
                {isRegister 
                  ? "Create your student account with college email" 
                  : "Enter your college email to continue"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isRegister && (
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    type="text" 
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>
              )}
              <div>
                <Label htmlFor="email">College Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.name@college.edu"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  className="mt-2"
                />
              </div>
              {isRegister && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="••••••••"
                    className="mt-2"
                  />
                </div>
              )}
              <Button 
                className="w-full hero-button" 
                onClick={isRegister ? handleStudentRegister : handleStudentLogin}
              >
                {isRegister ? "Create Account" : "Sign In"}
              </Button>
              <div className="text-center space-y-2">
                {!isRegister && (
                  <Button variant="link" className="text-primary">
                    Forgot password?
                  </Button>
                )}
                <div>
                  <Button 
                    variant="link" 
                    className="text-muted-foreground"
                    onClick={() => setIsRegister(!isRegister)}
                  >
                    {isRegister 
                      ? "Already have an account? Sign in" 
                      : "Don't have an account? Register"
                    }
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Admin Login/Register */}
        {selectedRole === "admin" && (
          <Card className="wellness-card max-w-md mx-auto">
            <CardHeader className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedRole(null);
                  setIsRegister(false);
                }}
                className="absolute left-4 top-4 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-2xl">
                {isRegister ? "Admin Registration" : "Admin Login"}
              </CardTitle>
              <CardDescription>
                {isRegister 
                  ? "Create your admin account" 
                  : "Enter your admin credentials"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isRegister && (
                <div>
                  <Label htmlFor="admin-fullName">Full Name</Label>
                  <Input 
                    id="admin-fullName" 
                    type="text" 
                    placeholder="Dr. Jane Smith"
                    className="mt-2"
                  />
                </div>
              )}
              <div>
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  placeholder="admin@zen.edu"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="admin-password">Password</Label>
                <Input 
                  id="admin-password" 
                  type="password" 
                  placeholder="••••••••"
                  className="mt-2"
                />
              </div>
              {isRegister && (
                <>
                  <div>
                    <Label htmlFor="admin-confirmPassword">Confirm Password</Label>
                    <Input 
                      id="admin-confirmPassword" 
                      type="password" 
                      placeholder="••••••••"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input 
                      id="department" 
                      type="text" 
                      placeholder="Student Counseling Services"
                      className="mt-2"
                    />
                  </div>
                </>
              )}
              <Button 
                className="w-full hero-button" 
                onClick={isRegister ? handleAdminRegister : handleAdminLogin}
              >
                {isRegister ? "Create Admin Account" : "Sign In as Admin"}
              </Button>
              <div className="text-center">
                <Button 
                  variant="link" 
                  className="text-muted-foreground"
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {isRegister 
                    ? "Already have an account? Sign in" 
                    : "Don't have an account? Register"
                  }
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LoginPage;