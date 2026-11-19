import React,{ useState } from "react";
import './useStateC.css'



export const UseStateComponent = () => {
    const [number,setNumber] = useState (0);

    return (
    <div className="container">
        <div className="div"><h1 className="title"> count : </h1><span className="element_n">{number}</span></div>
        <button onClick={() => {setNumber(number + 5)}
        } className="increase">INCREASE</button>
        <button onClick={() => {setNumber(number - 5)}} className="decrease"> DECREASE</button>

    </div>
    );
}