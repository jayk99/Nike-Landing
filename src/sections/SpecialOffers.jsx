
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../Components/Button'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
       <img src={offer} width={700} height={687} className='object-contain w-full'/>
    </div>

    <div className='flex flex-1 flex-col'>
  
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> <span className=' text-coral-red'>Amazing</span> <br/>Footwear deals
       
        
        </h2> 
        <p className='mt-4 lg:max-w-lg info-text'>Get ready to lace up for major savings! We're slashing prices on a ton of your favorite Nike shoes, from running rockets to comfy kicks for everyday adventures. ☁️</p>

         <p className='mt-6 lg:max-w-lg info-text'>Don't miss out on your chance to snag some awesome Nike shoes at amazing prices! .</p>
         <div className='mt-11 flex flex-wrap gap-4'>
         <Button label="Shop now" iconURL={arrowRight}/>
         <Button label="Learn more" backgroundColor='bg-white' borderColor='slate-gray' textColor='text-slate-grey'/>
         </div>
         </div>
  
    </section>
  )
}

export default SpecialOffers
