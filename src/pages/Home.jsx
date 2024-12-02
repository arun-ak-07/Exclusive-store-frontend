import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import iphone from "../assets/iphoneImage.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";
import ActiveSlider from "../components/ActiveSlider";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { SiYoutubegaming } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="w-full h-full">
        <div className="w-full md:h-[390px] flex md:flex-row flex-col">
          <div className="hidden md:flex w-[25%] justify-end items-end border-r">
            <div className="h-[344px] w-[217px]  m-4 flex  flex-col space-y-4 text-black">
              <p>Woman’s Fashion</p>
              <p>Men’s Fashion</p>
              <p>Electronics</p>
              <p>Home & Lifestyle</p>
              <p>Medicine</p>
              <p>Sports & Outdoor</p>
              <p>Baby’s & Toys</p>
              <p>Groceries & Pets</p>
              <p>Health & Beauty</p>
            </div>
          </div>

          <div className="sm:w-[75%] w-full p-2">
            <div className="md:w-[892px] w-full md:h-[344px] h-[200px] bg-black md:m-8 flex justify-end items-center">
              <div className="w-[50%] text-white space-y-6 md:pl-16 pl-8">
                <div className="flex justify-left items-center">
                  <FaApple className="md:h-10 md:w-12" />
                  <p className="text-sm">iPhone 14 Series</p>
                </div>
                <h2 className="md:text-5xl text-lg font-semibold ">
                  Up to 10% <br />
                  off Voucher
                </h2>
                <div className="flex justify-left items-center space-x-2">
                  <button className="underline underline-offset-8">
                    Shop now
                  </button>
                  <HiArrowSmallRight className="h-5 w-5 mt-3" />
                </div>
              </div>
              <div className="w-[50%]">
                <img src={iphone} className="w-[496px] md:h-[304px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ActiveSlider />

      <hr className="w-[80%] mx-auto my-10" />

      <div className=" h-screen w-screen space-y-8">
        <div className="w-full md:pl-40 pl-10">
          <h2 className="text-black font-semibold tracking-wider text-3xl">
            Browse By Category
          </h2>
        </div>

        <div className="flex md:space-x-16 md:flex-row justify-center">
          <div className="md:size-40 size-12 border border-black flex justify-evenly items-center flex-col hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
            <CiMobile4 className="size-10"/>
            <p className="text-xs font-semibold">Phones</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
          <HiOutlineComputerDesktop className="size-10" />
            <p className="text-xs font-semibold">Computers</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
          <BsSmartwatch className="size-10" />
            <p className="text-xs font-semibold">SmartWatches</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
          <IoCameraOutline className="size-10" />
            <p className="text-xs font-semibold">Camera</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
          <LuHeadphones className="size-10" />
            <p className="text-xs font-semibold">Headphones</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
          <SiYoutubegaming className="size-10" />
            <p className="text-xs font-semibold">Gaming</p>
          </div>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Home;
