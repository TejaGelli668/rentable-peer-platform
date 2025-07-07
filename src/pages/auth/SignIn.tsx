
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCheck, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: boolean;
  password?: boolean;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors: FormErrors = {};
  if (!formData.email) newErrors.email = true;
  if (!formData.password) newErrors.password = true;

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token); // Store JWT

    toast({
      title: "Welcome back!",
      description: "Redirecting to dashboard...",
    });

    setTimeout(() => navigate("/navigation"), 1000);
  } catch (err: any) {
    toast({
      title: "Login failed",
      description: err.message || "Something went wrong",
      variant: "destructive",
    });
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 flex items-center justify-center p-4">
      <div 
        className="w-full max-w-md animate-fade-in"
        data-screen="unified-auth" 
        data-mode="sign-in"
      >
        <Card className="shadow-xl hover-lift">
          <CardHeader className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <div className="w-16 h-16 mx-auto platform-gradient rounded-full flex items-center justify-center">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Welcome to RentHub</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  data-field="email"
                  data-valid={!errors.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={errors.email ? "border-red-500" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  data-field="password"
                  data-valid={!errors.password}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className={errors.password ? "border-red-500" : ""}
                />
              </div>

              <div className="text-right">
                <Link 
                  to="#" 
                  className="text-sm text-indigo-600 hover:underline"
                  data-action="forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full platform-gradient hover:opacity-90 text-white"
                data-action="submit"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-indigo-600 hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
