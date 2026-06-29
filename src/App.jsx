import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Mentor from "./Pages/Mentor/Mentor";
import ExploreSkills from "./Pages/Skills/ExploreSkills";
import ChatsAndBooking from "./Pages/Chats/ChatsAndBooking";
import Dashboard from "./Pages/Dashboard/Dashboard";

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/dashboard" || location.pathname === "/chatsandbooking";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatsandbooking" element={<ChatsAndBooking />} />
        <Route path="/mentors" element={<Mentor />} />
        <Route path="/exploreskills" element={<ExploreSkills />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
