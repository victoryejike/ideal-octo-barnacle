import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { logoLink } from "../utils/constants";
import { MdLanguage } from "react-icons/md";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [inputType, setInputType] = useState("password");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const showPasswordField = (e) => {
  //   e.preventDefault();
  //   const emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (email.match(emailValidator)) {
  //     setShowPassword(true);
  //   } else alert("Please enter a valid email");
  // };

  // const changeInputType = () => {
  //   if (inputType === "password") {
  //     setInputType("text");
  //     return;
  //   }
  //   setInputType("password");
  // };

  // const changeEmailValue = (e) => {
  //   e.preventDefault();
  //   setShowPassword(false);
  //   setEmail("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <section className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-4 pl-7">
        <Link to="/">
          <img className=" object-contain w-32 " src={logoLink} alt="tesla" />
        </Link>
        <div className="flex items-center">
          <MdLanguage className="w-7 h-7" /> <p className="text-sm">en-US</p>
        </div>
      </header>

      <div className="w-3/4 lg:w-3/12 2xl:w-[17%] mx-auto pt-5">
        <h2 className="text-left text-[34px] font-normal  pb-2">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="pt-6 pb-4">
            <div>
              <div className="flex justify-start items-center">
                <label className="text-sm text-[#969393] mr-1">First Name</label>
              </div>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="bg-[#F4F4F4] mt-2 text-sm p-[6px] text-black w-full outline-none rounded border border-transparent focus:border focus:border-gray-300 transition-all"
              />
            </div>
          </div>
          <div className={`pt-1 pb-4 relative`}>
            <label className="block text-sm text-[#969393]">Last Name</label>
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
              className="bg-[#F4F4F4] relative mt-2 text-sm p-[6px] text-black w-full outline-none rounded border border-transparent focus:border focus:border-gray-300 transition-all"
            />
          </div>
          <span className="my-7 text-sm flex justify-center items-center cursor-pointer text-gray-500">
            By continuing, you agree to our privacy policy and terms of use.
          </span>
          <div className="my-10">
            <button className=" text-[#393C41] bg-[#F4F4F4] rounded w-full py-2 text-sm">
              Next
            </button>
          </div>
        </form>
      </div>
      <div className="mt-auto pb-2">
        <Footer />
      </div>
    </section>
  );
};

export default Signup;
