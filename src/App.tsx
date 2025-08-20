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
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* Wrap all dashboard pages inside Layout */}
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            <Route
              path="/payroll"
              element={
                <Layout>
                  <PayrollTypeSetup />
                </Layout>
              }
            />
            <Route
              path="/recruitment/job"
              element={
                <Layout>
                  <Job />
                </Layout>
              }
            />
            <Route
              path="/recruitment/candidate"
              element={
                <Layout>
                  <Candidate />
                </Layout>
              }
            />
            <Route
              path="/recruitment/termination"
              element={
                <Layout>
                  <Termination />
                </Layout>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
