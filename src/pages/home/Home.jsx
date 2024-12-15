import React from "react";
import Footer from "../../components/Footer";
import iphone from "../../assets/iphoneImage.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";
import ActiveSlider from "../../components/ActiveSlider";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";
import jbl from "../../assets/jbl.png";
import NavBar from "../../components/NavBar";
import CategorySlider from "./CategorySlider";
import BestSellingProducts from "./BestSellingProducts";
import ExploreProducts from "./ExploreProducts"



const Home = () => {
  return (
    <div>
      <NavBar/>

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

      <CategorySlider/>

      {/* <hr className="w-[80%] mx-auto my-10" /> */}

      <BestSellingProducts/>

      <div className="w-full h-full mt-20 md:px-40 px-2">
        <div className="h-full w-full flex flex-row bg-black justify-between md:py-20 py-4">
          <div className=" flex flex-col w-1/2 justify-center md:space-y-16 space-y-2 md:pl-20 pl-4">
            <p className="text-green-500 text-xs font-bold tracking-wide">
              Catgories
            </p>
            <h1 className="text-white md:text-5xl text-xl font-semibold tracking-wide">
              Enhance Your <br /> Music Experience
            </h1>
            <button className="bg-green-500 text-white md:w-28 w-20 rounded-sm md:py-3 py-1 text-xs font-semibold tracking-wide">
              Buy Now!
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center relative">
            <div className="absolute rounded-full inset-0 h-full bg-[#383838] blur-lg "></div>
            <img
              src={jbl}
              className="md:h-64 h-436 rounded-full relative z-10 mr-2"
              alt="Image"
            />
          </div>
        </div>
      </div>

      <ExploreProducts/>

      <div className="h-full w-full flex md:flex-row flex-col justify-evenly items-center text-center p-10 md:px-32 px-0">
        <div className="flex flex-col items-center w-full m-8">
          <div className="bg-gray-400 rounded-full size-12 flex justify-center items-center">
            <div className="bg-black rounded-full size-9 flex justify-center items-center">
              <FaTruckFast className="size-6 text-white" />
            </div>
          </div>
          <h2 className="font-semibold mt-2 ">FREE AND FAST DELIVERY</h2>
          <p className="text-xs mt-2">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col items-center w-full m-8">
          <div className="bg-gray-400 rounded-full size-12 flex justify-center items-center">
            <div className="bg-black rounded-full size-9 flex justify-center items-center">
              <RiCustomerServiceLine className="size-6 text-white" />
            </div>
          </div>
          <h2 className="font-semibold mt-2 ">24/7 CUSTOMER SERVICE</h2>
          <p className="text-xs mt-2">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center w-full m-8">
          <div className="bg-gray-400 rounded-full size-12 flex justify-center items-center">
            <div className="bg-black rounded-full size-9 flex justify-center items-center">
              <img
                src="https://img.icons8.com/?size=100&id=14308&format=png&color=ffffff"
                className="size-6"
              />
            </div>
          </div>
          <h2 className="font-semibold mt-2 ">MONEY BACK GUARANTEE</h2>
          <p className="text-xs mt-2">We return money within 30 days</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
