import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />}
          />

          {/* Header Block */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
