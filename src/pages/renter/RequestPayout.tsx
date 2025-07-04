
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BankDetails {
  holderName: string;
  bankName: string;
  routing: string;
  account: string;
  amount: string;
}

const RequestPayout = () => {
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    holderName: "",
    bankName: "",
    routing: "",
    account: "",
    amount: ""
  });
  const [availableBalance] = useState(1247.50);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payout requested!",
      description: "Your payout request has been submitted for processing.",
    });
  };

  const setQuickAmount = (percentage: number) => {
    const amount = (availableBalance * percentage / 100).toFixed(2);
    setBankDetails(prev => ({ ...prev, amount }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8" data-screen="requestpayout">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Link to="/renter/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </Link>
          </div>

          <Card className="shadow-xl mb-6" data-widget="balance">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Available Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                ${availableBalance.toFixed(2)}
              </div>
              <p className="text-gray-600">Ready for payout</p>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Request Payout</CardTitle>
              <CardDescription>Add your bank details to receive payments</CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="holderName">Account Holder Name</Label>
                  <Input
                    id="holderName"
                    data-field="holderName"
                    value={bankDetails.holderName}
                    onChange={(e) => setBankDetails({...bankDetails, holderName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input
                    id="bankName"
                    data-field="bankName"
                    value={bankDetails.bankName}
                    onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="routing">Routing Number</Label>
                    <Input
                      id="routing"
                      data-field="routing"
                      value={bankDetails.routing}
                      onChange={(e) => setBankDetails({...bankDetails, routing: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="account">Account Number</Label>
                    <Input
                      id="account"
                      data-field="account"
                      value={bankDetails.account}
                      onChange={(e) => setBankDetails({...bankDetails, account: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Payout Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    max={availableBalance}
                    data-field="amount"
                    value={bankDetails.amount}
                    onChange={(e) => setBankDetails({...bankDetails, amount: e.target.value})}
                    required
                  />
                  <div className="flex gap-2 mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setQuickAmount(25)}
                      data-action="quick-fill"
                      data-value="25"
                    >
                      25%
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setQuickAmount(50)}
                      data-action="quick-fill"
                      data-value="50"
                    >
                      50%
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setQuickAmount(75)}
                      data-action="quick-fill"
                      data-value="75"
                    >
                      75%
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setQuickAmount(100)}
                      data-action="quick-fill"
                      data-value="100"
                    >
                      All
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full platform-gradient hover:opacity-90 text-white"
                  data-action="submit"
                >
                  Request Payout
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestPayout;
