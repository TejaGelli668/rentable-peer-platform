
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.password) newErrors.password = true;
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = true;
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      toast({
        title: "Account created successfully!",
        description: "Redirecting to navigation...",
      });
      setTimeout(() => navigate("/navigation"), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 flex items-center justify-center p-4">
      <div 
        className="w-full max-w-md animate-fade-in"
        data-screen="unified-auth" 
        data-mode="sign-up"
      >
        <Card className="shadow-xl hover-lift">
          <CardHeader className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <div className="w-16 h-16 mx-auto platform-gradient rounded-full flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>Join RentHub today</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  data-field="name"
                  data-valid={!errors.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={errors.name ? "border-red-500" : ""}
                />
              </div>

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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  data-field="confirmPassword"
                  data-valid={!errors.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className={errors.confirmPassword ? "border-red-500" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">Passwords do not match</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full platform-gradient hover:opacity-90 text-white"
                data-action="submit"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/signin" className="text-indigo-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
