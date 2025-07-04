
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import RenterDashboard from "./pages/renter/RenterDashboard";
import NewListing from "./pages/renter/NewListing";
import RequestPayout from "./pages/renter/RequestPayout";
import ViewAnalytics from "./pages/renter/ViewAnalytics";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import ItemDetails from "./pages/customer/ItemDetails";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/renter/dashboard" element={<RenterDashboard />} />
          <Route path="/renter/newlisting" element={<NewListing />} />
          <Route path="/renter/requestpayout" element={<RequestPayout />} />
          <Route path="/renter/viewanalytics" element={<ViewAnalytics />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/item/:id" element={<ItemDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
