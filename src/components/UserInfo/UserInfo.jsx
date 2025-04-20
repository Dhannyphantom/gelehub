"use client";
import { useState } from "react";

const UserInfo = ({ onChange, handleBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log({ formData });
    onChange && onChange(formData);
  };

  return (
    <div className="space-y-6 w-lg ">
      <h2 className="text-3xl font-bold text-gray-900">Your Information</h2>
      <div className="space-y-4">
        <div className="w-full">
          <label
            htmlFor="full_name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Enter full name"
            name="name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter event address"
            value={formData.email}
            onChange={handleChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter event address"
            value={formData.phone}
            onChange={handleChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="notes"
            className="block text-gray-700 font-semibold mb-2"
          >
            Additional Notes
          </label>
          <input
            type="notes"
            id="notes"
            name="notes"
            placeholder="Enter event address"
            value={formData.notes}
            onChange={handleChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      {/* Nav Content */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={handleBack}
          className="w-full sm:w-auto px-6 py-2 bg-gray-300 text-gray-800 rounded-lg cursor-pointer "
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-6 py-2 bg-primary-500 text-white rounded-lg cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
