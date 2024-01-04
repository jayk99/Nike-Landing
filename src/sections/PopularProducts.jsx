import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../Components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className=' max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className=' text-4xl font-palanquin font-bold'><span className=' text-coral-red'>Hot</span> Drops</h2>
        <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Conquer your day, your way, with every stride fueled by effortless style and unwavering support. Comfort never looked so good. Confidence never felt so effortless.</p>
      </div>
      <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-6 gap-14'>
        {products.map((product)=>(<PopularProductCard key={product.name}{...product}/>))}

      </div>
    </section>
  )
}

export default PopularProducts
