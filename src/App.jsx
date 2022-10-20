import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DemoColumn from "./components/DemoColumn/Democolumn.component";
import "./App.css";
import Home from "./components/Home/Home.component";
import DemoColumn2 from "./components/DemoColumn2/DemoColumn2.component";
import SepG from "./components/StackedColumn/StackedColumn";

const App = () => {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  });
  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<SepG />}/>
          <Route path="/distict" element={<DemoColumn />}/>
             
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
