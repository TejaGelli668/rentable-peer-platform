
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Professional Camera Kit",
      price: 45,
      advance: 100,
      days: 3,
      image: "/placeholder.svg",
      renter: "John's Electronics"
    },
    {
      id: 2,
      name: "Camping Tent (4-person)",
      price: 25,
      advance: 50,
      days: 2,
      image: "/placeholder.svg",
      renter: "Adventure Gear Co"
    }
  ]);

  const navigate = useNavigate();
  const { toast } = useToast();

  const updateQuantity = (id: number, newDays: number) => {
    if (newDays < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, days: newDays } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.days), 0);
  };

  const getTotalAdvance = () => {
    return cartItems.reduce((total, item) => total + item.advance, 0);
  };

  const proceedToCheckout = () => {
    navigate("/customer/payment");
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Cart ({cartItems.length} items)</CardTitle>
                <CardDescription>Review your selected items before checkout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-gray-400 text-sm">📷</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">by {item.renter}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-lg font-bold">${item.price}/day</span>
                        <Badge variant="outline">Advance: ${item.advance}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.days - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center">{item.days} days</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.days + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <div className="font-bold">${item.price * item.days}</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Your cart is empty
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Rental Total</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Deposit</span>
                  <span>${getTotalAdvance()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${getTotalPrice() + getTotalAdvance()}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    *Security deposit will be refunded after return
                  </p>
                </div>
                
                <Button
                  onClick={proceedToCheckout}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
