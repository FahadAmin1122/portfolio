
import React from "react";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "./lib/queryClient";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster } from "./components/ui/toaster";
// import Navbar from "@/components/Navbar";
import Navbar from "./components/Navbar";
// import Home from "@/pages/Home";
import Home from "./pages/Home";

function App() {
  return (
    <>
    {/* <QueryClientProvider client={queryClient}> */}
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Home />
        </main>
        {/* <Toaster />  */}
       </div> 
     {/* </QueryClientProvider> */}
    </>
  );
}

export default App;