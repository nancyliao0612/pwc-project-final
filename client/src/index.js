import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Reply from "./Reply";
import DownloadPDF from "./DownloadPDF";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reply" element={<Reply />} />
      <Route path="/downloadPDF" element={<DownloadPDF />} />
    </Routes>
  </BrowserRouter>
);
