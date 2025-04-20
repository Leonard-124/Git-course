
import React, {useState} from 'react';
import './Calculator.css';

const Calculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                setResult(eval(result));
            } catch (error) {
                setResult("Error");
            }
        }else if (value === "C") {
            setResult("");
        }else {
            setResult(result + value);
        }
    };
    return (
        <div className="calculator">
            <div className="display">{result || "0"}</div>
            <div className='buttons'>
                {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map((btn) => (
                   <button key={btn} onClick={() => handleClick(btn)}>
                    {btn}
                   </button> 
                ))}
            </div>
        </div>
    );
};
export default Calculator;