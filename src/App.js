import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Teslaaccount from "./pages/Teslaaccount";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route
            path="/teslaaccount"
            element={user ? <Teslaaccount /> : <Navigate to="/login" />}
          />
          <Route path="/teslaaccount" element={<Teslaaccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
