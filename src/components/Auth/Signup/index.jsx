import { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import axios from "axios";
import {API_URL} from "../../../config"
import { Password } from "tabler-icons-react";

export default function Signup() {
  const [checked, setValue] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const rememberMe = () => {
    setValue(!checked);
  };

const submitForm = () => {
  password === password2 ?
    (axios
      .post(`${API_URL}auth/register`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        admin: false,
        password: password,
      })
      .then((response) => {
        alert("success");
      })
      .catch((error) => {
        console.log(error.response.data)
         let errorMessage = "";
         Object.entries(error.response.data).map(
           ([key, value]) => (errorMessage += `${key}: ${value.join(")")}\n`)
         );
         alert(errorMessage)
      })
     ) : (
    alert("password does not match")
     )
};


  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full lg:h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    Create Account
                  </h1>
                  <div className="shape -mt-6">
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#FFBB38"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="input-area">
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      placeholder="Demo Name"
                      label="Frist Name*"
                      name="fname"
                      type="text"
                      inputClasses="h-[50px]"
                      value={firstName}
                      inputHandler={(e) => setFirstName(e.target.value)}
                    />

                    <InputCom
                      placeholder="Demo Name"
                      label="Last Name*"
                      name="lname"
                      type="text"
                      inputClasses="h-[50px]"
                      value={lastName}
                      inputHandler={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      placeholder="Demo@gmail.com"
                      label="Email Address*"
                      name="email"
                      type="email"
                      inputClasses="h-[50px]"
                      value = {email}
                      inputHandler={(e)=> setEmail(e.target.value)}
                    />

                    <InputCom
                      placeholder="2376 ************"
                      label="Phone*"
                      name="phone"
                      type="text"
                      inputClasses="h-[50px]"
                      value={phoneNumber}
                      inputHandler={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      placeholder="● ● ● ● ● ●"
                      label="Password*"
                      name="password"
                      type="password"
                      inputClasses="h-[50px]"
                      value={password}
                      inputHandler={(e) => setPassword(e.target.value)}
                    />

                    <InputCom
                      placeholder="● ● ● ● ● ●"
                      label="Confirm Password*"
                      name="password2"
                      type="password"
                      inputClasses="h-[50px]"
                      value={password2}
                      inputHandler={(e) => setPassword2(e.target.value)}
                    />
                  </div>
                  <div className="forgot-password-area mb-7">
                    <div className="remember-checkbox flex items-center space-x-2.5">
                      <button
                        onClick={rememberMe}
                        type="button"
                        className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                      >
                        {checked && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        onClick={rememberMe}
                        className="text-base text-black"
                      >
                        I agree all
                        <span className="text-qblack">tarm and condition</span>
                      </span>
                    </div>
                  </div>
                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        onClick={submitForm}
                      >
                        <span>Create Account</span>
                      </button>
                    </div>
                  </div>

                  <div className="signup-area flex justify-center">
                    <p className="text-base text-qgraytwo font-normal">
                      Alrady have an Account?
                      <a href="/login" className="ml-2 text-qblack">
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
