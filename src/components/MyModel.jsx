import React from 'react'
import { useEffect } from 'react';

const MyModel=({closeModel})=>{
    /////agr hm pop-up k sath scrol ni chate
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        };
    
    },[]);
    return(
      <>
      {/* //model-wrapper div pe onclick se page pe kahi b clik karege tu pop-up close ho jaega */}
      <div className="modal-wrapper" onClick={closeModel}></div>
      <div className="modal-container">
        <h1>STAY TUNED</h1>
      <p>Subscribe to our newsletter and never miss our designs,latest news etc.
        Our newsletter is sent once a week ,every Monday
      </p>
      <button className='modal-btn' onClick={closeModel}>Accept it</button>
      </div>
      </>
    )
  }

export default MyModel
