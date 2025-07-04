
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  Filter,
  ShoppingCart,
  Settings,
  LogOut,
  Heart,
  Plus
} from "lucide-react";

const CustomerDashboard = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    dateFrom: "",
    dateTo: "",
    category: "",
    priceRange: "",
    rating: ""
  });

  const [items] = useState([
    {
      id: 1,
      name: "Professional Camera Kit",
      category: "Electronics",
      price: "$45/day",
      rating: 4.8,
      reviews: 24,
      location: "2.1 miles away",
      thumbnail: "/placeholder.svg",
      renter: "John's Electronics"
    },
    {
      id: 2,
      name: "Camping Tent (4-person)",
      category: "Outdoor",
      price: "$25/day",
      rating: 4.9,
      reviews: 31,
      location: "1.5 miles away",
      thumbnail: "/placeholder.svg",
      renter: "Adventure Gear Co"
    },
    {
      id: 3,
      name: "Power Drill Set",
      category: "Tools",
      price: "$15/day",
      rating: 4.6,
      reviews: 18,
      location: "0.8 miles away",
      thumbnail: "/placeholder.svg",
      renter: "Mike's Tools"
    },
    {
      id: 4,
      name: "Stand Mixer",
      category: "Kitchen",
      price: "$20/day",
      rating: 4.7,
      reviews: 12,
      location: "3.2 miles away",
      thumbnail: "/placeholder.svg",
      renter: "Kitchen Essentials"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gradient">RentHub</h1>
              <p className="text-sm text-gray-600">Find & Rent Amazing Items</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                  2
                </Badge>
              </Button>
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

      <div className="container mx-auto px-4 py-8" data-screen="customer-dashboard">
        {/* Search & Filters Section */}
        <Card className="mb-8" data-widget="search-filters">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Find Items to Rent
            </CardTitle>
            <CardDescription>Search and filter items available in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Location"
                  data-field="location"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  className="pl-10"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  data-field="dateFrom"
                  value={searchFilters.dateFrom}
                  onChange={(e) => setSearchFilters({...searchFilters, dateFrom: e.target.value})}
                  className="pl-10"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  data-field="dateTo"
                  value={searchFilters.dateTo}
                  onChange={(e) => setSearchFilters({...searchFilters, dateTo: e.target.value})}
                  className="pl-10"
                />
              </div>
              
              <Select data-field="category">
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="outdoor">Outdoor</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                </SelectContent>
              </Select>
              
              <Select data-field="price">
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-20">$0 - $20</SelectItem>
                  <SelectItem value="20-50">$20 - $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100+">$100+</SelectItem>
                </SelectContent>
              </Select>
              
              <Select data-field="rating">
                <SelectTrigger>
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4+">4+ Stars</SelectItem>
                  <SelectItem value="3+">3+ Stars</SelectItem>
                  <SelectItem value="any">Any Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white">
                <Search className="w-4 h-4 mr-2" />
                Search Items
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-widget="results">
          {items.map((item) => (
            <Card key={item.id} className="hover-lift cursor-pointer group">
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      📷
                    </div>
                    <p className="text-sm">Item Photo</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Badge className="absolute bottom-2 left-2 bg-green-100 text-green-800">
                  Available
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-semibold line-clamp-1" data-field="name">{item.name}</h3>
                    <p className="text-sm text-gray-600" data-field="category">{item.category}</p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium" data-field="rating">{item.rating}</span>
                    <span className="text-sm text-gray-600">({item.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg" data-field="pricing">{item.price}</span>
                    <span className="text-sm text-gray-600">{item.location}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600">by {item.renter}</p>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white mt-3"
                    data-action="add-to-cart"
                    data-item-id={item.id}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="hover:bg-white/50">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
