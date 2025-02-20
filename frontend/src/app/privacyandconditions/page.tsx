"use client";

import NavBar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const PrivacyAndPolicy = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[500px] flex items-center justify-center text-center text-white bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="/images/privacy-banner.jpg" // Update with your actual image path
            alt="Privacy Policy Banner"
            fill
            className="object-cover brightness-75 opacity-50" 
            priority={true}
          />
        </div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Privacy & Policy
          </h1>
          <p className="text-lg md:text-xl mt-3 max-w-2xl mx-auto opacity-90">
            Learn how we protect your data and ensure your privacy.
          </p>
        </div>
      </section>

      {/* Content Section with White Background */}
      <div className="bg-white px-6 py-10  mx-auto">
        
        {/* User Agreement Section */}
        <h2 className="font-roboto font-bold text-[36px] text-[#023047] mb-6">
          1. User Agreement
        </h2>

        <p className="font-roboto text-[18px] text-[#023047] mb-4">
          This section explains the agreement between the user and [Your Website/Company Name] regarding the use of our services.
        </p>

        {/* Eligibility */}
        <h3 className="font-roboto font-regular text-[18px] text-[#023047] mt-6">
          1.1 Eligibility
        </h3>
        <p className="font-roboto text-[18px] text-[#023047] mb-4">
          You must be at least [Age] years old to use our services. By using this website, you confirm that you meet this requirement.
        </p>

        {/* Account Responsibilities */}
        <h3 className="font-roboto font-regular text-[18px] text-[#023047] mt-6">
          1.2 Account Responsibilities
        </h3>
        <p className="font-roboto text-[18px] text-[#023047]">
          Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
        </p>

        <br />
        
       {/* Privacy and Data Protection */}
       <h2 className="font-roboto font-bold text-[36px] text-[#023047] mb-6">
          2. Privacy and Data Protection
        </h2>

        <p className="font-roboto text-[18px] text-[#023047] mb-4">
        This section explains the agreement between the user and [Your Website/Company Name] regarding the use of our services.
        </p>

        {/* Eligibility */}
        <h3 className="font-roboto font-regular text-[18px] text-[#023047] mt-6">
          1.1 Eligibility
        </h3>
        <p className="font-roboto text-[18px] text-[#023047] mb-4">
          You must be at least [Age] years old to use our services. By using this website, you confirm that you meet this requirement.
        </p>

        {/* Account Responsibilities */}
        <h3 className="font-roboto font-regular text-[18px] text-[#023047] mt-6">
          1.2 Account Responsibilities
        </h3>
        <p className="font-roboto text-[18px] text-[#023047]">
          Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
        </p>
         
        <br />
        
        {/* Service and Usage */}
        <h2 className="font-roboto font-bold text-[36px] text-[#023047] mb-6">
           2. Service and Usage
         </h2>
 
         <p className="font-roboto text-[18px] text-[#023047] mb-4">
         This section explains the agreement between the user and [Your Website/Company Name] regarding the use of our services.
         </p>
 
         {/* Eligibility */}
         <h3 className="font-roboto font-regular text-[18px] text-[#023047] mt-6">
           1.1 Eligibility
         </h3>
         <p className="font-roboto text-[18px] text-[#023047] mb-4">
           You must be at least [Age] years old to use our services. By using this website, you confirm that you meet this requirement.
         </p>
 
         {/* Account Responsibilities */}
         <h3 className="font-roboto font-regular text-[18px] text-[#023047] mt-6">
           1.2 Account Responsibilities
         </h3>
         <p className="font-roboto text-[18px] text-[#023047]">
           Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
         </p>
          

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyAndPolicy;
