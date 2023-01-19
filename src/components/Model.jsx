import React, { useState } from 'react';
import MyModel from './MyModel';

const Model = () => {

    const [showModel, setShowModel] = useState(false);

    const closeModel=()=>{
        setShowModel(false);
    }

    return (
      <>
    
        <button className='modal-btn' onClick={()=>setShowModel(true)}>Open Modal</button>
        {showModel && <MyModel closeModel={closeModel}/>}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga est magnam ex praesentium obcaecati ipsum odio provident temporibus, 
             amet error aut modi numquam accusamus expedita quae repellendus repudiandae, animi quo!</p>
             <br/>
             <br/>
     
      </>
    )
}

export default Model
