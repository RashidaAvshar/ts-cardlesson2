import React, { useState } from 'react';
import { CardProps } from './model';
import { Iproduct } from '../../model';

type CardPropsDetail = {
   data: Iproduct
}

const Card = ({data}: CardPropsDetail) => {
  const [showDetail, setShowDetail] = useState<Boolean>(false)


  return (
    <div className='container'>
      <div className="flex justify-center mt-5">
  <div
    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src={data.image}
        alt={data.category} />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {data.title}
      </h5>
      <button onClick={()=>{setShowDetail(!showDetail)}} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  {!showDetail ? "Show more" : "Hide"}
</button>

      {
        showDetail ? 
        <>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {
        data.category}
      </p>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {data.description}
      </p> 
    </> : ""
      }
      
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Card
