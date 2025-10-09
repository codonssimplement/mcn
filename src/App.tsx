import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Explorer from "./pages/Explorer";
import ArtworkDetail from "./pages/ArtworkDetail";
import VirtualTour from "./pages/VirtualTour";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import QRCodeTest from "./pages/QRCodeTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/oeuvre/:id" element={<ArtworkDetail />} />
          <Route path="/visite-virtuelle" element={<VirtualTour />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/test-qr" element={<QRCodeTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
