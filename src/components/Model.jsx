import React, { useState } from 'react';
import MyModel from './MyModel';

const Model = () => {
    const [showModel, setShowModel] = useState(false);

    const closeModel=()=>{
        setShowModel(false);
    }

    return (
      <>
    
        <button onClick={()=>setShowModel(true)}>Open Modal</button>
        {showModel && <MyModel closeModel={closeModel}/>}
     
      </>
    )
}

export default Model
