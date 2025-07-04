
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, Users, Handshake, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">RentHub</div>
          <div className="flex gap-4">
            <Link to="/signin">
              <Button variant="ghost" className="hover:bg-white/50">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="platform-gradient hover:opacity-90 text-white">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 text-gradient animate-fade-in">
          Share. Rent. Prosper.
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in">
          RentHub is a revolutionary peer-to-peer rental platform that connects people who have items to share with those who need them. Turn your unused belongings into income while helping your community access affordable rentals.
        </p>

        {/* Business Model Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="hover-lift">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">For Item Owners</CardTitle>
              <CardDescription className="text-lg">
                Monetize your unused items safely and securely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  Earn passive income from idle items
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Easy listing and management tools
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  Insurance coverage for your items
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">For Renters</CardTitle>
              <CardDescription className="text-lg">
                Access anything you need without the commitment of buying
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  Save money on expensive purchases
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Try before you buy approach
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  Contribute to sustainable consumption
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">List or Browse</h3>
            <p className="text-gray-600">Owners list their items, renters browse and discover what they need</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect & Rent</h3>
            <p className="text-gray-600">Secure transactions with built-in insurance and verified users</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 platform-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn & Save</h3>
            <p className="text-gray-600">Owners earn money, renters save money, everyone wins</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of users already sharing and renting on RentHub</p>
          <Link to="/signup">
            <Button size="lg" className="platform-gradient hover:opacity-90 text-white px-8 py-4 text-lg">
              Join RentHub Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
