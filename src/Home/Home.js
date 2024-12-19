import React from 'react'
import './Home.css'

const Home = () => {
  return (
    
    <div className='home-container'>
      <a href="https://wa.me/9490887002" target='_blank' rel="noreferrer">
      <div className='fixed-element'>
         <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1734279277/whatsapp-logo_gan1na.webp" alt="whatsapp logo"  className='whatsapp-logo'/>
          <p className='whatsapp-para'>_Click to Book Now</p>
      </div>
      </a>
      
      <h1 className='span-para'>EXPLORE <br/><span className='header-heading'>LAMBASINGI</span><br/><span className='span-para'>@RAVI RESORTS</span></h1>
      
      <div className='welcome-para'>
          <p>WELCOME TO THE LAND OF HILLS & FOG , <br/>STRAWBERRIES, ORGANIC FARMS CHILLY HILL <br/>STATIONS, AUTHENTIC RECIPES AND LOVELY PEOPLE!</p>

      </div>
      <div className='cards-container'>
           <div className='bed-card'>    
                 <img src = "https://res.cloudinary.com/do6gfsc8z/image/upload/v1733727051/rooms_y8xlpr.jpg" alt="bed room" className='bed-room-image' />
                 <h1 className='des-heading'>Bedroom</h1>  
           </div>
           <div className='bed-card'>
                 <img src = "https://res.cloudinary.com/do6gfsc8z/image/upload/v1733936321/bornfire_lpauxu.avif" alt="bed room" className='bed-room-image' />
                 <h1 className='des-heading'>Born Fire</h1>
           </div>
           <div className='bed-card'>    
                 <img src = "https://res.cloudinary.com/do6gfsc8z/image/upload/v1733936197/camtents_vwyio9.jpg" alt="bed room" className='bed-room-image' />
                 <h1 className='des-heading'>Camping Tents</h1>  
           </div>
           <div className='bed-card'>
                 <img src = "https://res.cloudinary.com/do6gfsc8z/image/upload/v1733934906/food_b168nu.jpg" alt="bed room" className='bed-room-image' />
                 <h1 className='des-heading'>Delicious Food</h1>
           </div>
           <div className='bed-card'>    
                 <img src = "https://res.cloudinary.com/do6gfsc8z/image/upload/v1733936074/music_party_oeo4ga.avif" alt="bed room" className='bed-room-image' />
                 <h1 className='des-heading'>Music</h1>  
           </div>
           <div className='bed-card'>
                 <img src = "https://res.cloudinary.com/do6gfsc8z/image/upload/v1733936758/parking_h7b5ga.jpg" alt="bed room" className='bed-room-image' />
                 <h1 className='des-heading'>Parking Space</h1>
           </div>
        </div>
      <div className='amenities-container'>
         <h3 className='facilities'>Facilities</h3>
         <h1 className='best-services-heading'>Our Best <span className='span-service'>Services</span></h1>
         <div className='services-card-container'>
            <ul className='service-card'>
            
                 <h4>Basic Facilities</h4>
                 <li className='li-para'>- Reception/Front Desk</li>
                 <li className='li-para'>- Room Services</li>
                 <li className='li-para'>- House Keeping</li>
                 <li className='li-para'>- Wifi & Parking</li>
            </ul>
            <ul className='service-card'>
                 <h4>Room Aminities</h4>
                 <li className='li-para'>- Comfortable Reading</li>
                 <li className='li-para'>- Bed Room</li>
                 <li className='li-para'>- TV and AC</li>
                 <li className='li-para'>- Hot Water</li>
            </ul>
            <ul className='service-card'>
                 <h4>Dining Options</h4>
                 <li className='li-para'>- Restaurant Cafe</li>
                 <li className='li-para'>- Bar & Lounge</li>
                 <li className='li-para'>- Cafe & Canteen</li>
                 <li className='li-para'>- Room service</li>
            </ul>
            <ul className='service-card'>
                 <h4>Special Features</h4>
                 <li className='li-para'>- Newspaper</li>
                 <li className='li-para'>- Play ground</li>
                 <li className='li-para'>- Born Fire</li>
                 <li className='li-para'>- Camping tents</li>
            </ul>
            <ul className='service-card'>
                 <h4>Safety and Security</h4>
                 <li className='li-para'>- Fire Extinguishers</li>
                 <li className='li-para'>- First Aid Services</li>
                 <li className='li-para'>- Luggage assistance</li>
                 <li className='li-para'>- Health and wellness</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Home
