import React from 'react'


const MyModel=({closeModel})=>{
   
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
