
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Package, DollarSign } from "lucide-react";

const ViewAnalytics = () => {
  const topItems = [
    { name: "Professional Camera Kit", bookings: 24, revenue: 1080 },
    { name: "Camping Tent (4-person)", bookings: 18, revenue: 450 },
    { name: "Power Drill Set", bookings: 12, revenue: 180 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8" data-screen="analytics">
        <div className="mb-6">
          <Link to="/renter/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your rental performance and earnings</p>
          </div>

          {/* Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Bookings</CardTitle>
                <Package className="w-4 h-4 text-indigo-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">54</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
                <DollarSign className="w-4 h-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,710</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Avg. Daily Rate</CardTitle>
                <DollarSign className="w-4 h-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$31.67</div>
                <p className="text-xs text-gray-600 mt-1">Across all items</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Placeholder */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Bookings</CardTitle>
                <CardDescription>Bookings over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center" data-chart="weekly-bookings">
                  <div className="text-center text-gray-500">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                    <p>Weekly Bookings Chart</p>
                    <p className="text-sm">Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>Revenue breakdown by month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center" data-chart="monthly-revenue">
                  <div className="text-center text-gray-500">
                    <DollarSign className="w-12 h-12 mx-auto mb-2" />
                    <p>Monthly Revenue Chart</p>
                    <p className="text-sm">Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Items */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Items</CardTitle>
              <CardDescription>Your most popular rental items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" data-list="top-items">
                {topItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.bookings} bookings</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">${item.revenue}</div>
                      <p className="text-xs text-gray-500">Total revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewAnalytics;
