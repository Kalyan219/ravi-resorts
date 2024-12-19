import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='main-con'>
        <h1 className='g-heading'>Resorts Gallery</h1>
        <div className='gallery-container'>
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1734021098/straw_qavakm.jpg" alt='room view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733727051/rooms_y8xlpr.jpg" alt='room view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733727058/room_views_qyjbjo.jpg" alt='room inner view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733681649/balcony_amvb3y.jpg" alt="balcony view" className='image-width'/>
            <img src='https://res.cloudinary.com/do6gfsc8z/image/upload/v1733681673/night_camp_fire_brlijf.jpg' alt="morning view" className='image-width'/>
            <img src='https://res.cloudinary.com/do6gfsc8z/image/upload/v1733681673/night_topview_ngimjo.jpg' alt="night top" className='image-width'/>
            
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733681678/front_total_view_omb3do.jpg" alt='front view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733681682/night_view_vrjnyx.jpg" alt='nights view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733681679/window_view_e2amaa.jpg" alt='window view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733679901/morning_view_tivzdm.jpg" alt='mor front view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733740285/evening_mfzqiw.jpg" alt='evening view' className='image-width' />
            <img src="https://res.cloudinary.com/do6gfsc8z/image/upload/v1733763906/tents_g6qq8x.jpg" alt='camp tents' className='image-width' />
        </div>
    </div>
  )
}

export default Gallery