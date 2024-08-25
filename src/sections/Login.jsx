import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import useAuth

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Access login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
      });

      console.log("User logged in successfully:", response.data);

      // Extract data from response
      const { token, user } = response.data;

      // Set user information using AuthContext
      login({ token, ...user });

      // Show success message and redirect
      navigate("/profile");
      alert("Successfully logged in!");
    } catch (err) {
      console.error("Error logging in:", err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="flex w-full flex-col md:w-1/2 bg-blue-100">
      <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
        <p className="text-left text-5xl font-bold">Welcome back!</p>
        <p className="mt-2 text-left text-gray-500">Please enter your details.</p>
        <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
          <img
            className="mr-2 h-5"
            src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
            alt="Google Icon"
          />
          Log in with Google
        </button>
        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
          <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 text-center text-xl text-gray-500">
            or
          </div>
        </div>
        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col pt-4">
            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input
                type="email"
                name="email"
                className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-12 flex flex-col pt-4">
            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input
                type="password"
                name="password"
                className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>
        </form>
        <div className="py-12 text-center">
          <p className="whitespace-nowrap text-gray-600">
            Don't have an account?
            <span className="cursor-pointer underline-offset-4 font-semibold text-gray-900 underline">
              <a href="/register">Register for free</a>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
