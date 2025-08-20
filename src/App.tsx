import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PayrollTypeSetup from "./pages/PayrollTypeSetup";
import NotFound from "./pages/NotFound";
import Job from "./pages/recruitment/Job";
import Candidate from "./pages/recruitment/Candidate";
import Termination from "./pages/recruitment/Termination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recruitment/job" element={<Job />} />
            <Route path="/recruitment/candidate" element={<Candidate />} />
            <Route path="/recruitment/termination" element={<Termination />} />
          <Route path="/payroll" element={<PayrollTypeSetup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
