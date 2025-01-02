import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ClipLoader } from "react-spinners";

const Spinner = ({loading}) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen">
        <ClipLoader size={50} color="#4A90E2" loading={loading} />
        <div className="w-full mt-4">
          <Skeleton height={60} className="mb-4" />
          <Skeleton height={300} className="mb-4" />
          <Skeleton height={400} />
        </div>
      </div>
  )
}

export default Spinner
