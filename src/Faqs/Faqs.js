import {useState} from 'react'
import './Faqs.css'

const Faqs = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i){
          return setSelected(null)
        }
 
        setSelected(i)
    }
 
    return (
       <div className='wrapper'>
          <h1 className='faqs-heading'>Frequently Asked Questions</h1>
          <div className='accordion'>
             {data.map((item , i) => (
                 <div className='item'>
                   <div className='title' onClick={() => toggle(i)}>
                      <h2>
                         {item.question}
                      </h2>
                   <span className='span-plus'>{selected === i ? '-' : '+'}</span>
                   </div>
                   <div className={selected === i ? 'content show' : 'content'} >
                         {item.answer}
                   </div>
                </div>
             ))}
          </div>
       </div>
    )
 }
 
 const data = [
    {
      question : "What are the popular areas to visit nearby LAMBASINGI RAVI RESORT?",
      answer : "LAMBASINGI RAVI RESORT is located in Lambasingi VIA Tajangi Village. There are several popular areas and places nearby that you might consider visiting. Some popular areas near LAMBASINGI RAVI RESORT include:  visiting Places near by around 2 km far Distance from this RAVIRESORTS",
    },
    {
       question : "What are the check-in and check-out timings at LAMBASINGI RAVI RESORT?",
       answer : "Check in starts at 11 AM in LAMBASINGI RAVI RESORT and check out timing is 10 AM. For early check-in or late check-out, you can contact the hotel directly. The front desk is available 24 hours a day for your help.",
 
    },
    {
       question : "What are the customer ratings for LAMBASINGI RAVI RESORT hotel?" ,
       answer : "Overall rating for hotel LAMBASINGI RAVI RESORT is 5 star Rating.",
                 
    },
    {
       question : "Amenties",
       answer : "Fire Extinguishers, News Paer, Reception, Free Wi-fi, Restaurant, Air Conditioning, Laundry Service, Smoke Detector, Free Parking, Paid Airport Transfers, First aid services , Luggage Assistance.",
    },
    {
       question : "Food & Dining",
       answer : "Meal options are provided at the property",
    }
    ,
    {
       question : "Cottage Rules",
       answer : "Check-In: 11 AM | Check-Out: 10 AM , Unmarried couples allowed, Driving Licence is accepted as ID proof(s), Smoking within the premises is not allowed"
    }
 ]
 

export default Faqs