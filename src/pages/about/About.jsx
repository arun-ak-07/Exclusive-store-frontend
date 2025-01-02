import React, { useState } from 'react'

const About = () => {
    const [loading, setLoading] = useState(true)
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-b-green-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 m-auto border-4 border-transparent border-l-yellow-500 border-r-red-500 rounded-full animate-spin-reverse"></div>
      <div className="absolute inset-0 w-8 h-8 m-auto bg-white rounded-full"></div>
    </div>
  </div>
  )
}

export default About
