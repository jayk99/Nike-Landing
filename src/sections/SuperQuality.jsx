
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
  
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> We Bring you  <br /><span className=' text-coral-red'>Air</span><span className=' text-coral-red'>Max</span> Sneakers
       
        
        </h2> 
        <p className='mt-4 lg:max-w-lg info-text'>Nike Air Max isn't just a shoe, it's a movement.<br /> A celebration of individuality, audacity, and the boundless potential that lies within each of us.</p>

         <p className='mt-6 lg:max-w-lg info-text'>So lace up, take flight, and paint the city with your air.</p>
         <div className='mt-11 '>
         <Button label="Know more"/>
         </div>
       
    </div>
    <div className='flex-1 flex justify-center items-center'>
      <img src={shoe8} alt='nike air max' width={570} height={522} className='object-contain'/>
    </div>
    </section>
  )
}

export default SuperQuality

