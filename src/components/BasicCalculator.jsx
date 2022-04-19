import React, { useState } from 'react'
import '../assets/css/calculator.css';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom"

export default function BasicCalculator() {

  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const operators = ['+', '-', '*', '/', "=", "Clear", "Input"];

  const [disabled, setDisabled] = useState(true);

  const handleDisableInput = () => {
    setDisabled(!disabled);
  }

  const [field, setField] = useState("")
  const [result, setResult] = useState(0)

  const handleField=(value) => {
    if(value === "="){
      const resultTmp = eval(field);
      setResult(resultTmp)
      
    } 
    else if(value === "Clear"){
      setField("");
      setResult(0);
      setDisabled(true);
    }
    
    else {
      let temp = field + value;
      setField(temp);
    }


    
  }


  return (
    <div className="container text-center calculator">
      <h1 className="mt-5 text-center" variant="h1">Basic calculator</h1>
      <div className="row d-flex w-75 justify-content-center mt-5 flex-row align-items-center">
        <div className="col-6">
          <div className="row">
            {numbers.map((num, index) => (
              <div className="col-4 mt-3 button__number" key={index}>
                <Button disabled={disabled} onClick={()=>handleField(num)}  className="button__number__item" variant="text">{num}</Button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 result">
            <p>{field}</p>
            <p>Result: {result}</p>
        </div>
        <div className="col-12 m-5 button__oper">
          {operators.map((oper, index) => {
            return oper === 'Input' ?
            <Button onClick={handleDisableInput} className="button__oper__item" variant="text">{oper}</Button>:
            <Button disabled={disabled} onClick={()=>handleField(oper)} className="button__oper__item" variant="text">{oper}</Button>

          }
          )}
        </div>
      </div>
      <NavLink to="/">Back to home</NavLink>
    </div>
  )
}
