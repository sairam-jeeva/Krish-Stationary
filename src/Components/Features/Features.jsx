import React from 'react'
import delivery from '../../Assets/delivery-truck.png'
import support from '../../Assets/support.png'
import payback from '../../Assets/payback.png'
import discount from '../../Assets/discount.png'

const Features = () => {
  return (
    <div className='flex p-12 gap-16 ml-20 mt-12 font-outfit' id='features'>
        <div className='flex flex-col gap-2 text-center items-center w-52'>
        <img className='h-20 w-20' src={delivery} alt="" />
        <h2 className='font-bold'>Free Delivery</h2>
        <p className='text-gray-700'>24x7 Free Delivery around Salem</p>
        </div>
        <div className='flex flex-col gap-2 text-center items-center w-52'>
        <img className='h-20 w-20'src={support} alt="" />
        <h2 className='font-bold'>Online 24Hrs Support </h2>
        <p className= 'text-gray-700'>Lorem Ipsum and Maintanance</p>
        </div>
        <div className='flex flex-col gap-2 text-center items-center w-52'>
        <img className='h-20 w-20' src={payback} alt="" />
        <h2 className='font-bold'>Money Refund</h2>
        <p className= 'text-gray-700'>Lorem Ipsum and Maintanance</p>
        </div>
        <div className='flex flex-col gap-2 text-center items-center w-52'>
        <img className='h-20 w-20' src={discount} alt="" />
        <h2 className='font-bold'>Membership Discount</h2>
        <p className= 'text-gray-700'>Lorem Ipsum and Maintanance</p>
        </div>
    </div>
  )
}

export default Features