
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Store, ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">RentHub</div>
          <div className="flex gap-4">
            <Link to="/renter/signin">
              <Button variant="ghost" className="hover:bg-white/50">Renter Login</Button>
            </Link>
            <Link to="/customer/signin">
              <Button variant="ghost" className="hover:bg-white/50">Customer Login</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 text-gradient animate-fade-in">
          Share. Rent. Prosper.
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Connect with your community through our peer-to-peer rental platform. 
          Rent out your unused items or find exactly what you need from neighbors nearby.
        </p>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card 
            className="hover-lift cursor-pointer transition-all duration-300 border-2 hover:border-indigo-300 hover:shadow-xl"
            data-screen="role-selection" 
            data-role="renter"
          >
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
                <Store className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Become a Renter</CardTitle>
              <CardDescription className="text-lg">
                Turn your unused items into income
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  Secure payments & insurance
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Easy listing management
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  Reach local customers
                </li>
              </ul>
              <Link to="/renter/signup" className="block">
                <Button className="w-full platform-gradient hover:opacity-90 text-white">
                  Start Renting Out
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card 
            className="hover-lift cursor-pointer transition-all duration-300 border-2 hover:border-cyan-300 hover:shadow-xl"
            data-screen="role-selection" 
            data-role="customer"
          >
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Become a Customer</CardTitle>
              <CardDescription className="text-lg">
                Find and rent items from your community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  Verified renters & items
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Instant booking
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  Local pickup & delivery
                </li>
              </ul>
              <Link to="/customer/signup" className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white">
                  Start Browsing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Insured</h3>
            <p className="text-gray-600">All rentals are protected with comprehensive insurance coverage</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Connect</h3>
            <p className="text-gray-600">Connect with verified community members instantly</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
            <p className="text-gray-600">Support your local community while saving money</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
