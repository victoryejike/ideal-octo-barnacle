import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import SectionBlock from "./components/SectionBlock";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <Router>
      <div className="relative">
        <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
        <SectionBlock />
      </div>
    </Router>
  );
}

export default App;
