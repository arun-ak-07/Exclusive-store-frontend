import React, { useState } from "react";
import NavBar from "../components/NavBar";
import mobile from "../assets/mobile.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import axios from "axios";
import { valdiateSignUp } from "../utils/validation";
import { PulseLoader } from "react-spinners"; 
import { backendUrl } from "../../utils/api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  console.log("formData");

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    const validateErrors = valdiateSignUp(name, email, password)

    if(Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors)
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/signUp`,
        {
          name,
          email,
          password,
        }
      );

      console.log("response", response.data);

      if (response.status === 200) {
        // setTimeout(() => {
          toast.success("Account created successfully!");
        // },3000)
        setName("");
        setEmail("");
        setPassword("");
        setLoading(false);
        setErrors({})
      }
    } catch (error) {
      toast.error("Error creating account. Please try again.");
      console.log("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />

      <div className="py-8 mt-8 grid grid-cols-1 md:grid-cols-2">
        <div className="p-2 sm:p-0">
          <img src={mobile} className="sm:m-0" />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <form className=" p-8 space-y-10" onSubmit={handleSubmit}>
            <h4 className="text-3xl font-semibold tracking-wider">
              Create an account
            </h4>
            <p className="text-sm">Enter your details below</p>
            <div>
            <input
              type="text"
              className="border-b outline-none border-gray-400 sm:w-[370px] w-full h-8"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // required
            />
            <br />
            { errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            
            <div>
            <input
              type="text"
              className="border-b outline-none border-gray-400 sm:w-[370px] w-full h-8"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <br />
            { errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            
            <div>
            <input
              type="password"
              className="border-b outline-none border-gray-400 sm:w-[370px] w-full h-8"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <br />
            { errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            
            <button
              className="text-center text-white bg-orange-600 h-[56px] sm:w-[370px] w-full rounded-sm"
              type="submit"
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <PulseLoader color="#fff" loading={loading} size={10} />
                </div>
              ) : (
                'Create an account'
              )}
            </button>
            <button className="flex items-center justify-center space-x-4 text-center sm:w-[370px] w-full text-black border-gray-400 h-[56px] rounded-sm border">
              <img
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt=""
                className="h-8 w-8 text-center"
              />
              <p>Sign up with Google</p>
            </button>
            <div className="text-center sm:w-[370px] w-full h-8">
              <Link to={"/SignIn"} className="text-center">
                Already have account?{" "}
                <span className="underline underline-offset-8">Log in</span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
