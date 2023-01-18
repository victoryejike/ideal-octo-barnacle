import React, { useState } from "react";
import { logoLink } from "../utils/constants";
import { MdLanguage } from "react-icons/md";
import Tooltip from "../components/Tooltip";

// bg-[#9CB5F1]

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(emailValidator)) {
      alert("good to go!");
    } else alert("please enter a valid email");
  };

  console.log(password, email);

  return (
    <section className="">
      <header className="flex justify-between items-center p-4 pl-7">
        <img className=" object-contain w-32 " src={logoLink} alt="tesla" />
        <div className="flex items-center">
          <MdLanguage className="w-7 h-7" /> <p className="text-sm">en-US</p>
        </div>
      </header>

      <div className="w-3/4 lg:w-3/12 2xl:w-[17%] mx-auto pt-5">
        <h2 className="text-left text-[34px] font-normal  pb-2">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="pt-6 pb-4">
            <div className="flex justify-start items-center">
              <label className="text-sm text-[#969393] mr-1">Email</label>
              <Tooltip />
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="bg-[#F4F4F4] mt-2 text-sm p-[6px] text-black w-full outline-none rounded border border-transparent focus:border focus:border-gray-300 transition-all"
            />
          </div>
          <div className="pt-6 pb-4 hidden">
            <label className="block text-sm text-[#969393]">Password</label>
            <input
              type="password"
              value={email}
              onChange={handlePasswordChange}
              className="bg-[#F4F4F4] mt-2 text-sm p-[6px] text-black w-full outline-none rounded border border-transparent focus:border focus:border-gray-300 transition-all"
            />
          </div>
          <div className="my-4">
            <button
              type="submit"
              className={`${
                email === "" ? "bg-[#9CB5F1]" : "bg-[#3E6AE1]"
              } text-white rounded w-full py-[9px] text-sm`}>
              Next
            </button>
          </div>
          <span className="underline underline-offset-[6px] my-7 text-sm flex justify-center items-center cursor-pointer">
            Trouble Signing in?
          </span>
          <div className="flex justify-center items-center pt-0">
            <span className=" inline-block w-32 h-0 border"></span>
            <p className="mx-2 text-slate-300">Or</p>
            <span className=" inline-block w-32 h-0 border"></span>
          </div>
          <div className="my-10">
            <button className=" text-[#393C41] bg-[#F4F4F4] rounded w-full py-2 text-sm">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
