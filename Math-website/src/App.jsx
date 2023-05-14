import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Imtahanlar/FirstPage";
import Imtahanlar from "./pages/Imtahanlar/SecondPage";
import OnlaynVideolar from "./pages/Imtahanlar/ThirdPage";
import ScoreBoard from "./pages/Imtahanlar/FourthPage";
import Haqqimizda from "./pages/Imtahanlar/FiftyPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Page1 from "./pages/Imtahanlar/Test-Imtahanlar/Page1";
import Page2 from "./pages/Imtahanlar/Test-Imtahanlar/Page2";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/imtahanlar" element={<Imtahanlar />} />
      <Route path="/onlayn-videolar" element={<OnlaynVideolar />} />
      <Route path="/score-board" element={<ScoreBoard />} />
      <Route path="/haqqimizda" element={<Haqqimizda />} />
      <Route path="/teste-basla" element={<Page1 />} />
      <Route path="/teste-basla/imtahan-sehife-1" element={<Page2 />} />
    </Routes>
  );
}
