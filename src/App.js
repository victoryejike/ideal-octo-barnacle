import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />

          {/* Header Block */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
