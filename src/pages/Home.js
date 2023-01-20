import React, { useState } from "react";
import Header from "../components/Header";
import SectionBlock from "../components/SectionBlock";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Home = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <div className="snap-y snap-mandatory overflow-auto h-screen">
        <SectionBlock />
      </div>
    </div>
  );
};

export default Home;
