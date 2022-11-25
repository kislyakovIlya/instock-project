import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InventoryPage from "./pages/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage";


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<WarehousesPage />} />
        <Route path="/warehouses/*" element={<WarehousesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
