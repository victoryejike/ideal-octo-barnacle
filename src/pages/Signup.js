import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { logoLink } from "../utils/constants";
import { MdLanguage } from "react-icons/md";
import Tooltip from "../components/Tooltip";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const showPasswordField = (e) => {
    e.preventDefault();
    const emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(emailValidator)) {
      setShowPassword(true);
    } else alert("Please enter a valid email");
  };

  const changeInputType = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  const changeEmailValue = (e) => {
    e.preventDefault();
    setShowPassword(false);
    setEmail("");
  };

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
            {showPassword ? (
              <div className="flex justify-between items-center">
                <p>{email}</p>
                <p
                  className="underline text-sm cursor-pointer underline-offset-4"
                  onClick={changeEmailValue}>
                  Change
                </p>
              </div>
            ) : (
              <div>
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
            )}
          </div>
          <div className={`pt-1 pb-4 relative ${showPassword ? "block" : "hidden"}`}>
            <label className="block text-sm text-[#969393]">Password</label>
            <input
              type={inputType}
              value={password}
              onChange={handlePasswordChange}
              className="bg-[#F4F4F4] relative mt-2 text-sm p-[6px] text-black w-full outline-none rounded border border-transparent focus:border focus:border-gray-300 transition-all"
            />
            <span className="absolute top-11 right-3 cursor-pointer" onClick={changeInputType}>
              {inputType === "password" ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>
          <div className="my-4">
            {showPassword ? (
              <div>
                <button
                  type="submit"
                  className={`${
                    password === ""
                      ? "bg-[#9CB5F1] cursor-not-allowed"
                      : "bg-[#3E6AE1] cursor-pointer"
                  } text-white rounded w-full py-[9px] text-sm`}>
                  Sign In
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={showPasswordField}
                className={`${
                  email === "" ? "bg-[#9CB5F1] cursor-not-allowed" : "bg-[#3E6AE1] cursor-pointer"
                } text-white rounded w-full py-[9px] text-sm`}>
                Next
              </button>
            )}
          </div>
          {showPassword ? (
            <span className="underline underline-offset-[6px] my-7 text-sm flex justify-center items-center cursor-pointer">
              Forgot Password?
            </span>
          ) : (
            <span className="underline underline-offset-[6px] my-7 text-sm flex justify-center items-center cursor-pointer">
              Trouble Signing in?
            </span>
          )}

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
      <div className="mt-auto pb-2">
        <Footer />
      </div>
    </section>
  );
};

export default Signup;
