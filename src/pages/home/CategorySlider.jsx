import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { LuHeadphones } from "react-icons/lu";
import { SiYoutubegaming } from "react-icons/si";
import { ImMobile } from "react-icons/im";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const CategorySlider = () => {
  return (
    <div className=" h-full w-full space-y-10">
        <div className="w-full md:pl-40 pl-6">
          <h2 className="text-black font-bold tracking-wider text-3xl">
            Browse By Category
          </h2>
        </div>

        <div className="md:flex hidden md:space-x-14 md:flex-row justify-center">
          <div className="md:size-40 size-12 border border-black flex justify-evenly items-center flex-col hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
            <ImMobile className="size-10 font-bold" />
            <p className="text-xs font-semibold">Phones</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
            <FaComputer className="size-10" />
            <p className="text-xs font-semibold">Computers</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
            <BsSmartwatch className="size-10" />
            <p className="text-xs font-semibold">SmartWatches</p>
          </div>
          <div className="md:size-40 size-12 hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer border border-black flex flex-col justify-evenly items-center">
            <FaCameraRetro className="size-10" />
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

        <div className='md:hidden w-full px-4 pl-8'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={3}
                pagination={{ clickable: true }}
                className='mySwiper'
            >
                
                <SwiperSlide>
            <div className="size-20 border border-black flex flex-col justify-evenly items-center hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
              <ImMobile className="size-10" />
              <p className="text-xs font-semibold">Phones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 border border-black flex flex-col justify-evenly items-center hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
              <FaComputer className="size-10" />
              <p className="text-xs font-semibold">Computers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 border border-black flex flex-col justify-evenly items-center hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
              <BsSmartwatch className="size-10" />
              <p className="text-xs font-semibold">SmartWatches</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 border border-black flex flex-col justify-evenly items-center hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
              <FaCameraRetro className="size-10" />
              <p className="text-xs font-semibold">Camera</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 border border-black flex flex-col justify-evenly items-center hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
              <LuHeadphones className="size-10" />
              <p className="text-xs font-semibold">Headphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 border border-black flex flex-col justify-evenly items-center hover:text-white hover:bg-red-500 hover:border-red-500 cursor-pointer">
              <SiYoutubegaming className="size-10" />
              <p className="text-xs font-semibold">Gaming</p>
            </div>
          </SwiperSlide>

            </Swiper>
        </div>

      </div>
  )
}

export default CategorySlider
