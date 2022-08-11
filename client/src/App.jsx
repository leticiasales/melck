import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import TruckloadsSearch from "./components/Truckloads/Search";
import TruckloadsList from "./components/Truckloads/List";

function App() {
  return (
    <div className="flex flex-col bg-pattern">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<TruckloadsSearch />}/>
            <Route path="cargas">
              <Route index element={<TruckloadsList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
