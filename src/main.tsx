import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AutoBlogPage from "./pages/AutoBlogPage";
import HotelBookingPage from "./pages/HotelBookingPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/autoblog" element={<AutoBlogPage />} />
        <Route path="/projects/hotel-booking" element={<HotelBookingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
