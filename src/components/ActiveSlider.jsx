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

const ActiveSlider = () => {

  const [products, setProducts] = useState()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      
      const response = await axios.get(`http://localhost:8000/api/products/getProducts`)
      setProducts(response.data)

    } catch (error) {
      console.log(error.message);
    }
  }

  const addToCart = async () => {
    toast.success("Product added successfully")
  }

  return (
    <div className=" flex flex-col justify-center items-center h-full md:pt-28 pt-10 space-y-10">

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
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[80%]"
      >
        {products?.map((prod, ind) => (
          <SwiperSlide key={ind} className="w-[700px] h-[700px] rounded overflow-hidden shadow-lg space-y-2 relative">
          <div className='h-full w-full bg-gray-100 group'>
          <div className="space-y-2 flex flex-col items-end absolute top-4 right-4 z-50">
            <div className='bg-white rounded-full '>
            <CiHeart className='' />
            </div>
            <IoEyeOutline/>
          </div>
          <div className='w-full h-40 py-8 px-20'>
          <img
            className="w-full h-full"
            src={prod.image}
            alt={prod.name}
          />
          </div>
          </div>
          <button className="text-white bg-black p-2 w-full rounded-sm font-semibold" onClick={addToCart}>
            Add To Cart
          </button>
          <div className="px-6 py-4">
            <div className="text-base font-semibold mb-2 text-left">{prod.name}</div>
            <p className="text-orange-600 text-base text-left">
              ${prod.price}
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
