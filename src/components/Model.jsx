import React, { useState } from 'react'

const Model = () => {
    const [showModel, setShowModel] = useState(false);

    const MyModel=()=>{
      return(
        <>
          <h1>STAY TUNED</h1>
        <p>Subscribe to our newsletter and never miss our designs,latest news etc.
          Our newsletter is sent once a week ,every Monday
        </p>
        <button onClick={()=>setShowModel(false)}>Accept it</button>
        </>
      )
    }
    return (
      <>
    
        <button onClick={()=>setShowModel(true)}>Open Modal</button>
        {showModel && <MyModel/>}
     
      </>
    )
}

export default Model
