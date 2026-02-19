import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {

  const handleComingSoon = () => {
    alert("Mobile App Coming Soon 🚀");
  };

  return (
    <div className='app-download' id='app-download'>
        <p>
          For Better Experience Download <br /> Tomato App
        </p>

        <div className="app-download-platforms">
          
          <img 
            src={assets.play_store} 
            alt="Google Play"
            style={{ cursor: "pointer" }}
            onClick={handleComingSoon}
          />

          <img 
            src={assets.app_store} 
            alt="App Store"
            style={{ cursor: "pointer" }}
            onClick={handleComingSoon}
          />

        </div>
      
    </div>
  )
}

export default AppDownload
