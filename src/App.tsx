
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RenterSignUp from "./pages/renter/RenterSignUp";
import RenterSignIn from "./pages/renter/RenterSignIn";
import RenterDashboard from "./pages/renter/RenterDashboard";
import CustomerSignUp from "./pages/customer/CustomerSignUp";
import CustomerSignIn from "./pages/customer/CustomerSignIn";
import CustomerDashboard from "./pages/customer/CustomerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/renter/signup" element={<RenterSignUp />} />
          <Route path="/renter/signin" element={<RenterSignIn />} />
          <Route path="/renter/dashboard" element={<RenterDashboard />} />
          <Route path="/customer/signup" element={<CustomerSignUp />} />
          <Route path="/customer/signin" element={<CustomerSignIn />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
