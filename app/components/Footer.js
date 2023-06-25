"use client";
import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};
const Footer = () => {
  return (
    <div className="bg-[#380D41]">
      <div className="footer-wrapper">
        <div className="mask-image absolute top-0 left-0 w-full h-full"></div>

        <div className="footer-content">
          <div className="left-side">
            <div className="footer-logo">
              <Image
                src="/assets/image/navlogo.png"
                alt="Logo"
                width={139}
                height={64}
                className="leading-[63.98px] ml-[35.16px]"
              />
              <p className="font-regular text-lg ml-4 w-[412.8px] h-[135px] mt-[35.16px] text-white">
                LOGO is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when
              </p>
            </div>
          </div>

          <div className="right-side">
            <div
              id="links"
              className="text-center absolute right-[44.83%] tracking-widest uppercase"
            >
              <h1 className="font-bold mb-2 gradient-text leading-[30px] text-[30px] font-routhem">
                Useful Links
              </h1>
              <a href="/" className="block mb-1 text-white">
                Home
              </a>
              <a href="/productpage" className="block mb-1 text-white">
                Product
              </a>
              <a href="/" className="block mb-1 text-white">
                About Us
              </a>
              <a href="/" className="block mb-1 text-white">
                Contact Us
              </a>
            </div>

            <div className="social-media-icons">
              <div className="absolute right-[11.25%]">
                <h1 className="text-3xl mb-6 font-routhem uppercase tracking widest text-white">
                  Follow Us on
                </h1>
                <div className="flex space-x-8">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook size={60} className="text-white" />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterCircle size={60} className="text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram size={60} className="text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsYoutube size={65} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" onClick={scrollToTop} className="cursor-pointer">
          <Image
            src="/assets/image/rocket.png"
            alt="Scroll to top"
            className="right-0 absolute top-0"
            width={108}
            height={184}
          />
        </a>
      </div>

      <div className="text-center mt-8">
        <p className="p-[39px] font-semibold text-white">
          COPYRIGHT 2021 lOGO ALL RIGHT RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
