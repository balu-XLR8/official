import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Forwarded from "./pages/Forwarded";
import Completed from "./pages/Completed";
import Rejected from "./pages/Rejected";
import Directives from "./pages/Directives";
import Analytics from "./pages/Analytics";
import Posts from "./pages/Posts";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import MainLayout from "./components/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="forwarded" element={<Forwarded />} />
            <Route path="completed" element={<Completed />} />
            <Route path="rejected" element={<Rejected />} />
            <Route path="directives" element={<Directives />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="posts" element={<Posts />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;