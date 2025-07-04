
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Star, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PreviousPurchases = () => {
  const [purchases] = useState([
    {
      id: 1,
      name: "Professional Camera Kit",
      renter: "John's Electronics",
      rentalDates: "Dec 15-18, 2024",
      totalPaid: 235,
      status: "completed",
      image: "/placeholder.svg",
      hasReview: false
    },
    {
      id: 2,
      name: "Camping Tent (4-person)",
      renter: "Adventure Gear Co",
      rentalDates: "Dec 10-12, 2024",
      totalPaid: 125,
      status: "completed",
      image: "/placeholder.svg",
      hasReview: true
    },
    {
      id: 3,
      name: "Power Drill Set",
      renter: "Mike's Tools",
      rentalDates: "Dec 20-22, 2024",
      totalPaid: 95,
      status: "active",
      image: "/placeholder.svg",
      hasReview: false
    }
  ]);

  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: "",
    recommend: false
  });

  const { toast } = useToast();

  const submitReview = (purchaseId: number) => {
    if (reviewData.rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Rating is required to submit a review.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback.",
    });

    // Reset form
    setReviewData({ rating: 0, comment: "", recommend: false });
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`w-8 h-8 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          >
            <Star className="w-full h-full" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/customer/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Rental History</CardTitle>
            <CardDescription>View your previous and current rentals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-sm">📷</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold">{purchase.name}</h3>
                    <p className="text-sm text-gray-600">by {purchase.renter}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {purchase.rentalDates}
                      </div>
                      <Badge variant={purchase.status === 'completed' ? 'default' : 'secondary'}>
                        {purchase.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold">${purchase.totalPaid}</div>
                    {purchase.status === 'completed' && !purchase.hasReview && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="mt-2">
                            Leave Review
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Leave a Review</DialogTitle>
                            <DialogDescription>
                              Share your experience with {purchase.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Rating</label>
                              <StarRating 
                                rating={reviewData.rating} 
                                onRatingChange={(rating) => setReviewData({...reviewData, rating})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Comment</label>
                              <Textarea
                                placeholder="Share your experience..."
                                value={reviewData.comment}
                                onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="recommend"
                                checked={reviewData.recommend}
                                onChange={(e) => setReviewData({...reviewData, recommend: e.target.checked})}
                              />
                              <label htmlFor="recommend" className="text-sm">
                                I would recommend this item to others
                              </label>
                            </div>
                            <Button 
                              onClick={() => submitReview(purchase.id)}
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white"
                            >
                              Submit Review
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {purchase.hasReview && (
                      <Badge variant="outline" className="mt-2">
                        Reviewed
                      </Badge>
                    )}
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

export default PreviousPurchases;
