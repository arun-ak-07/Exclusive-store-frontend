import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { backendUrl } from '../../../utils/api';
import Spinner from '../../components/Spinner';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const nav = useNavigate()

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/products/getProducts`);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  if(loading){
    return <Spinner loading={loading} />
  }

  return (
    <div className='h-full w-full'>
      <NavBar />

      <div className='md:h-28 h-20 md:pl-52 pl-10 flex items-center'>
        <p onClick={()=>nav('/Home')} className='text-gray-500 font-semibold text-sm cursor-pointer'>Home / <span className='font-semibold text-black'>Cart</span></p>
      </div>

      <div className='h-full w-full md:px-52 px-0'>
        <div className='overflow-x-auto'>
          <table className='table-auto w-full text-center border-collapse'>
            <thead className='text-left'>
              <tr>
                <th className='p-4 text-sm font-semibold text-left'>Product</th>
                <th className='p-4 text-sm font-semibold '>Price</th>
                <th className='p-4 text-sm font-semibold'>Quantity</th>
                <th className='p-4 text-sm font-semibold'>Subtotal</th>
              </tr>
            </thead>
            <tbody className='text-left'>
              {products?.slice(0, 4).map((prod, index) => (
                <tr key={index}>
                  <td className='py-4 flex items-center justify-start md:flex-row flex-col gap-4'>
                    <img src={prod.image} className='w-16 h-16' alt={prod.name} />
                    <span className='text-sm text-center'>{prod.name}</span>
                  </td>
                  <td className='p-4 text-sm'> ₹{prod.price}</td>
                  <td className='p-4 text-sm'>
                    <input
                      type='number'
                      className='w-12 border rounded text-center'
                      defaultValue={1}
                      min={1}
                    />
                  </td>
                  <td className='p-4 text-sm'>
                  ₹{(prod.price )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='w-full md:px-52 px-2 pl-4 pt-10 flex md:flex-row flex-col md:justify-between justify-center'>
        <button className='border-2 border-gray-500 rounded-sm font-semibold text-sm px-12 h-12 hover:bg-red-600 hover:text-white'>Return To Shop</button>
        <button className='border-2 border-gray-500 rounded-sm font-semibold text-sm px-12 h-12 hover:bg-red-600 md:mt-0 mt-4 hover:text-white'>Update Cart</button>
      </div>

      <div className='w-full h-full mt-20 flex justify-end items-center p-2 md:px-52 px-2'>
              <div className='md:w-[470px] w-full h-[324px] flex justify-evenly flex-col border-black border-2 rounded-sm px-8'>
                <p className='font-semibold text-xl' >Cart Total</p>
                <div className='flex justify-between border-b-2 pb-4'><p className='' >Subtotal:</p><span> ₹1900</span></div>
                <div className='flex justify-between border-b-2 pb-4'><p className='' >Shipping:</p><span>Free</span></div>
                <div className='flex justify-between border-b-2 pb-4'><p className='' >Total:</p><span> ₹1900</span></div>
                <div className='w-full flex justify-center'>
                  <button className='bg-red-600 text-white text-sm h-12 w-52 rounded-sm '>Process to checkout</button>
                  </div>
              </div>
      </div>

      <Footer/>

    </div>
  );
};

export default Cart;
