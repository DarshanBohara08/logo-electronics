import Link from "next/link";
import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex justify-between items-center overflow-hidden bg-[#380D41]">
      <div
        style={{ boxShadow: "0px 6px 4px rgba(255, 255, 255, 0.25)" }}
        className="w-full h-[148px] flex justify-between shadow-xl"
      >
        {/* logo */}
        <div className="leading-[63.98px] ml-[35.16px] ">
          <Image
            src="/assets/image/navlogo.png"
            alt="Logo"
            width={200}
            height={64}
            className="leading-[63.98px] ml-[35.16px] mt-8"
          />
        </div>

        {/* nav contents */}
        <div id="nav" className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 mr-[508px] md:p-2 mt-16 md:flex-row md:space-x-8">
            <li className="text-[25px] bg-gradient-to-r from-[#920AA8] via-[#E019CC] to-[#FE3873] bg-clip-text text-transparent leading-[38px] font-semibold px-[25px] ml-[1136px] gradient-border rounded-full">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[25px] bg-gradient-to-r from-[#920AA8] via-[#E019CC] to-[#FE3873] bg-clip-text text-transparent leading-[38px] font-semibold px-[25px] flex items-center justify-center gradient-border">
              <Link href="/productpage">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
