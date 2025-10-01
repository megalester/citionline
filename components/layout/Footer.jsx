import React from "react";
import FooterNavCard from "../ui/FooterNavCard";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#333] px-20 max-md:px-10 py-5 pt-10">
      <section className="flex justify-between max-md:flex-wrap max-md:gap-5">
        <FooterNavCard
          title={"Why Citi"}
          navList={[
            "our story",
            "careers",
            "benefits an services",
            "rewards",
            "citi entertainment®",
            "special offers",
          ]}
        />
        <FooterNavCard
          title={"Wealth Management"}
          navList={[
            "citigold® private client",
            "citigold",
            "citi priority",
            "citi private bank",
          ]}
        />
        <FooterNavCard
          title={"Business Banking"}
          navList={["small business account", "commercials accounts"]}
        />
        <FooterNavCard
          title={"Rates"}
          navList={[
            "personal banking",
            "credit cards",
            "mortgage",
            "home equity",
            "personal loans",
          ]}
        />
        <FooterNavCard
          title={"Help & Support"}
          navList={["contact us", "help & FAQs", "security center"]}
        />

        <div>
          <Image
            src={"/images/homeicon.jpg"}
            alt="Card"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
      </section>

      <div className="my-7">
        <Image
          src={"/images/footericons.jpg"}
          alt="Card"
          width={1200}
          height={200}
          className="object-contain"
        />
      </div>

      <hr className="text-gray-500" />

      <div className="text-xs text-slate-200 col-flex gap-3 mt-6">
        <strong>Important Legal Disclosures & Information</strong>
        <p>
          Citibank.com provides information about and access to accounts and
          financial services provided by Citibank, N.A. and its affiliates in
          the United States and its territories. It does not, and should not be
          construed as, an offer, invitation or solicitation of services to
          individuals outside of the United States.
        </p>
        <p>
          Terms, conditions and fees for accounts, products, programs and
          services are subject to change. Not all accounts, products, and
          services as well as pricing described here are available in all
          jurisdictions or to all customers. Your eligibility for a particular
          product and service is subject to a final determination by Citibank.
          Your country of citizenship, domicile, or residence, if other than the
          United States, may have laws, rules, and regulations that govern or
          affect your application for and use of our accounts, products and
          services, including laws and regulations regarding taxes, exchange
          and/or capital controls that you are responsible for following.
        </p>
        <p>
          The products, account packages, promotional offers and services
          described in this website may not apply to customers of International
          Personal Bank U.S. in the Citigold® Private Client International,
          Citigold® International, Citi International Personal, Citi Global
          Executive Preferred, and Citi Global Executive Account Packages.
        </p>
        <p>
          Deposit products and services are offered by Citibank, N.A., Member
          FDIC
        </p>
      </div>

      <div className="mt-7">
        <Image
          src={"/images/citiredesign-footer.svg"}
          alt="Card"
          width={80}
          height={80}
          className="object-contain ml-[-40px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
