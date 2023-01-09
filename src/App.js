import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SectionBlock from "./components/SectionBlock";
// import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <Router>
      <div className="relative">
        <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
        <SectionBlock />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
