
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Shield, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RenterItem = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock data - in real app, fetch based on id
  const item = {
    id: 1,
    name: "Professional Camera Kit",
    category: "Electronics",
    price: 45,
    advance: 100,
    rating: 4.8,
    reviews: 24,
    location: "Your Location",
    description: "Complete professional camera kit including DSLR camera, multiple lenses, tripod, and accessories. Perfect for photography shoots, events, or learning. All equipment is well-maintained and comes with instruction manuals.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    features: [
      "DSLR Camera with 24-70mm lens",
      "Additional 50mm and 85mm lenses",
      "Professional tripod",
      "Camera bag and accessories",
      "Memory cards included"
    ],
    bookings: 8,
    status: "active"
  };

  const handleDelete = () => {
    toast({
      title: "Listing deleted",
      description: "Your listing has been removed successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/renter/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {item.images.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={image} alt={`${item.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{item.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{item.rating}</span>
                  <span className="text-gray-600">({item.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${item.price}/day
              </div>
              <div className="text-lg text-gray-600">
                Advance: ${item.advance}
              </div>
              <div className="mt-4">
                <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                  {item.status} • {item.bookings} bookings
                </Badge>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link to={`/renter/edit/${item.id}`} className="flex-1">
                <Button className="w-full platform-gradient hover:opacity-90 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Listing
                </Button>
              </Link>
              <Button
                variant="outline"
                className="text-red-600 hover:text-red-700 border-red-300 hover:border-red-500"
                onClick={handleDelete}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterItem;
