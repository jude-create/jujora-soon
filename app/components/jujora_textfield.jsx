"use client";

import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export default function InputField({
  label,
  type,
  placeholder,
  error,
  trailing,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // If the input type is 'password', use the state to toggle visibility
  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="flex flex-col gap-2 w-[80%]">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <input
          {...props}
          type={inputType}
          placeholder={placeholder}
          className={`w-full px-3  py-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-[40%] text-gray-500"
          >
            {isPasswordVisible ? (
              <span role="img" aria-label="hide password">
                <FaEyeSlash />
              </span>
            ) : (
              <span role="img" aria-label="show password">
                <FaRegEye />
              </span>
            )}
          </button>
        )}
        {trailing && <div className="absolute right-2 top-2">{trailing}</div>}
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-1">Error message goes here.</p>
      )}
    </div>
  );
}
