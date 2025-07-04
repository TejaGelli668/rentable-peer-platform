
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Package, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Settings, 
  LogOut,
  Eye,
  Edit,
  MoreHorizontal 
} from "lucide-react";

const RenterDashboard = () => {
  const [listings] = useState([
    {
      id: 1,
      name: "Professional Camera Kit",
      category: "Electronics",
      status: "active",
      pricing: "$45/day",
      bookings: 8,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Camping Tent (4-person)",
      category: "Outdoor",
      status: "rented",
      pricing: "$25/day",
      bookings: 12,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Power Drill Set",
      category: "Tools",
      status: "active",
      pricing: "$15/day",
      bookings: 5,
      thumbnail: "/placeholder.svg"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gradient">RentHub</h1>
              <p className="text-sm text-gray-600">Renter Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8" data-screen="renter-dashboard">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-lift" data-widget="overview-card" data-card="listings">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Listings</CardTitle>
              <Package className="w-4 h-4 text-indigo-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2 this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift" data-widget="overview-card" data-card="earnings">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Earnings</CardTitle>
              <DollarSign className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,247</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift" data-widget="overview-card" data-card="pending-bookings">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Bookings</CardTitle>
              <Calendar className="w-4 h-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600 mt-1">Awaiting confirmation</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <Button className="platform-gradient hover:opacity-90 text-white" data-action="new-listing">
            <Plus className="w-4 h-4 mr-2" />
            Add New Listing
          </Button>
          <Button variant="outline" className="hover:bg-white/50">
            Request Payout
          </Button>
          <Button variant="outline" className="hover:bg-white/50">
            View Analytics
          </Button>
        </div>

        {/* Listings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Your Listings</CardTitle>
            <CardDescription>Manage your rental items and track performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" data-table="listings">
              {listings.map((listing) => (
                <div 
                  key={listing.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  data-field="thumbnail|name|status|pricing"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{listing.name}</h3>
                      <p className="text-sm text-gray-600">{listing.category}</p>
                      <p className="text-sm font-medium text-green-600">{listing.pricing}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge 
                        variant={listing.status === 'active' ? 'default' : 'secondary'}
                        className={listing.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}
                      >
                        {listing.status}
                      </Badge>
                      <p className="text-xs text-gray-600 mt-1">{listing.bookings} bookings</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RenterDashboard;
