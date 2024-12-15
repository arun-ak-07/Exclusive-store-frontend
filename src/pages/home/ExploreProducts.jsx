import axios from 'axios'
import { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'
import { backendUrl } from '../../../utils/api'


const ExploreProducts = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/products/getProducts`)
      setProducts(response.data.products)
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="mt-10 w-full h-full md:p-36">
        
      <div className="w-full h-full space-y-16">
      <div className='w-full md:pl-0 pl-10 flex justify-left items-center space-x-4'>
        <div className='bg-red-600 w-4 h-9 rounded-sm'></div>
        <p className='text-red-600 font-semibold'>Our Products</p>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center space-y-4 md:space-y-0">
  <h1 className="font-bold text-4xl text-center md:text-left">Explore Our Products</h1>
  <button className="bg-red-600 text-xs p-4 px-16 text-white rounded-sm font-semibold">
    View All
  </button>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:p-0 p-4">
          {products?.slice(4, 12).map((prod, ind) => (
            <div
            key={ind}
            className="w-full h-[350px] space-y-2 flex flex-col items-left relative"
          >
            <div className="w-full group relative overflow-hidden">
              <div className="space-y-2 flex flex-col items-end absolute top-4 right-4 z-50">
                <div className="bg-white rounded-full p-1">
                  <CiHeart className="cursor-pointer" />
                </div>
                <div className="bg-white rounded-full p-1">
                  <IoEyeOutline className="cursor-pointer" />
                </div>
              </div>
        
              <div
                className="w-full h-48 py-8 bg-slate-100 px-20 transition-transform duration-300 ease-in-out group-hover:-translate-y-3"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-contain"
                />
              </div>
        
              <div
                className="absolute bottom-[-100px] w-full group-hover:bottom-0 transition-all duration-300 ease-in-out"
              >
                <button
                  className="text-white bg-black p-2 w-full rounded-sm font-semibold"
                >
                  Add To Cart
                </button>
              </div>
            </div>
        
            <div className="px-0 py-2">
              <p className="font-semibold text-left">{prod.name}</p>
              <p className="text-red-600 text-left">
                <span className="font-semibold">₹</span>
                {prod.price}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreProducts
