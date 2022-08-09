import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import TruckloadsSearch from "./components/Truckloads/Search";
import TruckloadsList from "./components/Truckloads/List";

function App() {
  return (
    <div>    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index />
            <Route path="cargas">
              <Route index element={<TruckloadsSearch />} />
              <Route path=":category" element={<TruckloadsList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
