import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backendUrl } from '../../utils/api';

const ActiveSlider = () => {

  const [products, setProducts] = useState()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      
      const response = await axios.get(`${backendUrl}/api/products/getProducts`)
      setProducts(response.data.products)
      console.log(response.data)

    } catch (error) {
      console.log(error.message);
    }
  }

  const addToCart = async () => {
    toast.success("Product added successfully")
  }

  return (
    <div className=" flex flex-col justify-center items-center h-full md:pt-28 pt-10 space-y-10">
      <div className='w-full md:pl-40 pl-10 flex justify-left items-center space-x-4'>
        <div className='bg-red-600 w-4 h-9 rounded-sm'></div>
        <p className='text-red-600 font-semibold'>Today's</p>
      </div>
      <div className='w-full md:pl-40 pl-10'>
        <h2 className='text-black font-bold tracking-wider text-3xl'>Flash Sales</h2>
      </div>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[80%]
        "
      >
       {products?.map((prod, ind) => (
  <SwiperSlide
    key={ind}
    className="w-full h-[400px] space-y-2 flex flex-col items-left relative"
  >
    <div className="h-full w-full bg-gray-100 group relative overflow-hidden">
      <div className="space-y-2 flex flex-col items-end absolute top-4 right-4 z-50">
        <div className="bg-white rounded-full p-1">
          <CiHeart />
        </div>
        <div className="bg-white rounded-full p-1">
          <IoEyeOutline />
        </div>
      </div>

      <div
        className="w-full h-48 py-8 px-20 transition-transform duration-300 ease-in-out group-hover:-translate-y-3"
      >
        <img
          className="w-full h-full object-contain"
          src={prod.image}
          alt={prod.name}
        />
      </div>

      <div
        className="absolute bottom-[-100px] w-full group-hover:bottom-0 transition-all duration-300 ease-in-out"
      >
        <button
          className="text-white bg-black p-2 w-full rounded-sm font-semibold"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>

    <div className="px-0 py-2">
      <div className="text-base font-semibold mb-2 text-left">{prod.name}</div>
      <p className="text-orange-600 text-base text-left">
        <span className="font-semibold">₹</span>
        {prod.price}
      </p>
    </div>
  </SwiperSlide>
))}


      </Swiper>

      <button className='bg-red-600 text-xs p-4 px-16 text-white rounded-sm font-semibold'>View All Products</button>

    </div>
  );
}

export default ActiveSlider;
