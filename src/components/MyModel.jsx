import React from 'react'


const MyModel=({closeModel})=>{
   
    return(
      <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <h1>STAY TUNED</h1>
      <p>Subscribe to our newsletter and never miss our designs,latest news etc.
        Our newsletter is sent once a week ,every Monday
      </p>
      <button onClick={closeModel}>Accept it</button>
      </div>
      </>
    )
  }

export default MyModel
