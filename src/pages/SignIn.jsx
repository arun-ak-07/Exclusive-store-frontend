import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import mobile from '../assets/mobile.png'
import toast from 'react-hot-toast'
import axios from 'axios'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({email:'', password:''})

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const newErrors = {}

      if(!password){
        newErrors.password = 'password required'
      }

      if(!email){
        newErrors.email = 'email required'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length > 0) return;

      const response = await axios.post(
        `http://localhost:8000/api/auth/signIn`,
        {
          email,
          password,
        })

        if(response.status === 200) {
          toast.success("login success");
          setEmail('')
          setPassword('')
          setErrors({email:'', password:''})
        } 
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error signing in to the account. Please try again.");
      }
      console.log(error.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />

      <div className="py-8 mt-4 grid grid-cols-1 md:grid-cols-2">

        <div className="p-2 sm:p-0 flex justify-center">
          <img 
            src={mobile} 
            className="sm:m-0" 
            alt="Mobile"
          />
        </div>

        <div className="flex justify-center items-center px-4">
          <form className="p-6 w-full max-w-md rounded-lg" onSubmit={handleSubmit}>
            <h4 className="text-2xl sm:text-3xl font-semibold tracking-wider text-left mb-4">Log In Exclusive</h4>
            <p className="text-sm text-left mb-6">Enter your details below</p>

            <div className='mb-6'>
            <input 
              type="text" 
              className="border-b outline-none border-gray-400 w-full h-10 px-2" 
              placeholder="Email" 
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
            { errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            </div>

            <div className='mb-6'>
            <input 
              type="password" 
              className="border-b outline-none border-gray-400 w-full h-10 px-2" 
              placeholder="Password" 
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
            { errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              <button 
                className="text-center text-white bg-orange-600 outline-none h-[56px] w-full sm:w-1/2 rounded-sm transition-transform transform hover:scale-105"
              >
                Log In
              </button>
              <button 
                className="text-center text-orange-600 border-gray-400 h-[56px] w-full sm:w-1/2"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SignIn
