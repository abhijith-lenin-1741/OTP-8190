"use client";
import React, { useState } from "react";
import { Alert } from "antd";
const Form = () => {
  const [alert, setAlert] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    mob: ""
  })

  const handleChange = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(true);
    setFormDetails(({
      name: "",
      email: "",
      mob: ""
    }))
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="p-4 w-full outline-none my-4 text-gray-500"
        type="text"
        placeholder="Enter name"
        required
        name="name"
        value={formDetails?.name}
        onChange={handleChange}
      />
      <input
        className="p-4 w-full outline-none my-4 text-gray-500"
        type="email"
        placeholder="Enter email"
        required
        name="email"
        value={formDetails?.email}
        onChange={handleChange}

      />
      <input
        className="p-4 w-full outline-none my-4 text-gray-500"
        type="number"
        placeholder="Enter Mobile Number"
        required
        name="mob"
        value={formDetails?.mob}
        onChange={handleChange}

      />
      <button className="p-4 w-full outline-none my-8 bg-green-300">
        Submit
      </button>
      {alert && (
        <Alert message="Form Submitted Successfully!!" type="success" />
      )}
    </form>
  );
};

export default Form;
