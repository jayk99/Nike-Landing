
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
     <h3 className='font-palanquin text-center text-4xl font-bold'>
      What Our <span className='text-coral-red'>Customers</span> Say?
     </h3>
     <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear what our Customers have to say</p>
     <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review)=>(<ReviewCard key={review.customerName} imgURL={review.imgURL} rating={review.rating} customerName={review.customerName} feedback={review.feedback}/>))}
     </div>
    </section>
  )
}

export default CustomerReviews
