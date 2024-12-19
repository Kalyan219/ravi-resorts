import React from 'react'
import './Contact.css'

const Conatct = () => {
  return (
    <div className='main-container'>
        <h1 className='c-heading'>Contact Us</h1>
        <p className='c-para'>Mobile Number : 9490887002 , 8074252570</p>
        <p className='c-para'>WhatsApp : 9490887002</p>
        <p className='c-para'>Website URL : <a href='https://www.raviresortslambasingi.in' target="_blank" rel="noreferrer">raviresortslambasingi.in</a></p>
        <p className='c-para'>Gmail: <a href="mailto:killoraviresorts@gmail.com" >killoraviresorts@gmail.com</a> </p>
        <p className='c-para'>Instagram: <a href="https://www.instagram.com/ravi_resort_lambasingi/profilecard/?igsh=Mm5sNmVvOG9uMThq" target='_blank' className='s-para' rel="noreferrer">Click here to follow on Instagram</a></p>
        <a href='https://maps.app.goo.gl/1EvfHzbFh6DaWNqo7' target='_blank' rel="noreferrer" className='a-tag' ><img src='https://res.cloudinary.com/do6gfsc8z/image/upload/v1733942187/Google-Maps-logo_xyypya.png' alt='google logo' className='google-image' /></a>
        <p className='g-para'>Click on above Google Maps symbol to get location of resort</p>
    </div>

  )
}

export default Conatct
