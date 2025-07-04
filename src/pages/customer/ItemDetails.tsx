
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Shield, Plus, Minus, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ItemDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
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
    location: "2.1 miles away",
    description: "Complete professional camera kit including DSLR camera, multiple lenses, tripod, and accessories. Perfect for photography shoots, events, or learning. All equipment is well-maintained and comes with instruction manuals.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    renter: {
      name: "John's Electronics",
      rating: 4.9,
      totalRentals: 156
    },
    features: [
      "DSLR Camera with 24-70mm lens",
      "Additional 50mm and 85mm lenses",
      "Professional tripod",
      "Camera bag and accessories",
      "Memory cards included"
    ],
    customerReviews: [
      {
        id: 1,
        customerName: "Sarah M.",
        rating: 5,
        date: "2024-06-15",
        comment: "Amazing camera kit! Everything was in perfect condition and the quality exceeded my expectations. Perfect for my wedding photography session.",
        verified: true
      },
      {
        id: 2,
        customerName: "Mike R.",
        rating: 4,
        date: "2024-06-10",
        comment: "Great equipment, very professional setup. The only minor issue was that one lens cap was missing, but overall excellent experience.",
        verified: true
      },
      {
        id: 3,
        customerName: "Emily L.",
        rating: 5,
        date: "2024-06-05",
        comment: "Fantastic service! The camera worked perfectly for my event. John was very responsive and helpful throughout the rental process.",
        verified: true
      },
      {
        id: 4,
        customerName: "David K.",
        rating: 4,
        date: "2024-05-28",
        comment: "Good quality camera kit. Helped me complete my photography project successfully. Would definitely rent again.",
        verified: false
      }
    ]
  };

  const addToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/customer/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Browse
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={item.images[selectedImage]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${item.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
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

            <Card>
              <CardHeader>
                <CardTitle>Renter Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{item.renter.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.renter.rating} rating</span>
                      <span>•</span>
                      <span>{item.renter.totalRentals} rentals</span>
                    </div>
                  </div>
                  <Badge variant="secondary">Verified</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={addToCart}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white"
                  data-action="add-to-cart"
                  data-item-id={item.id}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                Customer Reviews ({item.customerReviews.length})
              </CardTitle>
              <CardDescription>
                See what other customers are saying about this item
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {item.customerReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.customerName}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
