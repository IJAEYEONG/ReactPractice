import React, { useState } from "react";
function APP(){
    const [state,setState]=useState([]);
    const [inputValue,setInput]=useState('');

    const addList=()=>{
        if(inputValue.trim()){
            setState([...state,{text:inputValue,complete:false}]);
            setInput('');
        }
    }
    return(
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={addList}>추가</button>
            <ul>
                {state.map((stae,index)=>(
                    <li key={index}>
                    {stae.text}
                    </li>
                ))}
                </ul>
            
        </div>
    )
}
export default APP;