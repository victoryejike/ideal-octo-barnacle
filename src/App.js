import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderBlock from "./components/HeaderBlock";
import SectionBlock from "./components/SectionBlock";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  // const sectionDescription = [
  //   {
  //     title: "Model Y",
  //     subTitle: "Schedule a Demo Drive",
  //     firstActionBtn: "Buy Now",
  //     secondActionBtn: "Custom Order",
  //     bgUrl:
  //       "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
  //   }
  // ];

  return (
    <Router>
      <div>
        <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
        <div>
          {/* {sectionDescription.map((section, index) => (
            <SectionBlock
              key={index}
              title={section.title}
              subTitle={section.subTitle}
              bgUrl={section.bgUrl}
              actionBtn1={section.firstActionBtn}
              actionBtn2={section.secondActionBtn}
            />
          ))} */}
        </div>
        <HeaderBlock />
        <SectionBlock />
      </div>
    </Router>
  );
}

export default App;
