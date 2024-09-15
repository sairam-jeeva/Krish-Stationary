import React from 'react'

const VisitUs = () => {
  return (
    <div className='font-outfit  mr-8' id='map'>
        <div>
            <h1 className='p-8 text-5xl text-center'>Visit Our Store</h1>
            <p className='text-lg text-gray-500 text-center leading-snug'>Visit Our Store @Gugai, <br></br>Old Bus Stand, Salem - 636016</p>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.579880200074!2d78.16752009999999!3d11.653256699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c471ba716d%3A0x4bd10ef3d60928c7!2sKRISH%20STATIONERY!5e0!3m2!1sen!2sin!4v1725647280202!5m2!1sen!2sin" className='h-screen mt-10 ml-14 w-11/12 p-3' allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
    </div>
  )
}

export default VisitUs