import React from 'react'
import delivery from '../../Assets/delivery-truck.png'
import support from '../../Assets/support.png'
import payback from '../../Assets/payback.png'
import discount from '../../Assets/discount.png'

const Features = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-8 md:p-10 lg:p-12 w-full max-w-screen-lg mx-auto font-outfit' id='features'>
      
      {/* Feature 1: Free Delivery */}
      <div className='flex flex-col gap-4 text-center items-center'>
        <img className='h-16 w-[50%] md:w-[40%] lg:w-[30%] object-contain' src={delivery} alt="Free Delivery" />
        <h2 className='font-bold text-lg'>Free Delivery</h2>
        <p className='text-gray-700'>24x7 Free Delivery around Salem</p>
      </div>

      {/* Feature 2: Money Refund */}
      <div className='flex flex-col gap-4 text-center items-center'>
        <img className='h-16 w-[50%] md:w-[40%] lg:w-[30%] object-contain' src={payback} alt="Money Refund" />
        <h2 className='font-bold text-lg'>Money Refund</h2>
        <p className='text-gray-700'>Refund of Money if any products is defect</p>
      </div>

      {/* Feature 3: 24Hrs Support */}
      <div className='flex flex-col gap-4 text-center items-center'>
        <img className='h-16 w-[50%] md:w-[40%] lg:w-[30%] object-contain' src={support} alt="24Hrs Support" />
        <h2 className='font-bold text-lg'>Online 24Hrs Support</h2>
        <p className='text-gray-700'>Call or Message us any time we will work for you</p>
      </div>

      {/* Feature 4: Membership Discount */}
      <div className='flex flex-col gap-4 text-center items-center'>
        <img className='h-16 w-[50%] md:w-[40%] lg:w-[30%] object-contain' src={discount} alt="Membership Discount" />
        <h2 className='font-bold text-lg'>Membership Discount</h2>
        <p className='text-gray-700'>Follow our Social accounts to get discounts</p>
      </div>

    </div>
  )
}

export default Features
