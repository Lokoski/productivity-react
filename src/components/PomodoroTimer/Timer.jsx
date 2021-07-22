import React, { useState, useEffect } from "react";

function Timer() {

    const [mins, setMins] = useState(1);
    const [secs, setSecs] = useState(0);
    const [message, setMessage] = useState(false);
    const [cycles, setCycles] = useState(4);
    const [cyclesMessage, setCyclesMessage] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    let timerMins = mins < 10 ? `0${mins}` : mins;
    let timerSecs = secs < 10 ? `0${secs}` : secs;

    if (isActive) {
        let interval = setInterval(() => {
          clearInterval(interval);
          if (secs === 0) {
            if (mins !== 0) {
              setSecs(59);
              setMins(mins - 1);
            }else{
              if(cycles === 4){
                setMins(1);
                setCyclesMessage(!cyclesMessage);
                setCycles(0);
                setMessage(false)
              }
              showShortBreak();
            }
          }else {
            setSecs(secs - 1);
          }
        }, 1000);
      }

      // if(isActive && cycles === 4){
      //   let interval = setInterval(() =>{
      //     clearInterval(interval);
      //     if (secs === 0) {
      //       if (mins !== 0) {
      //         setSecs(59);
      //         setMins(mins - 1);
      //       }else{
      //         setMins(1);
      //         setCyclesMessage(!cyclesMessage);
      //         setCycles(0);
      //         setMessage(false)
      //       }
      //     }else {
      //       setSecs(secs - 1);
      //     }
      //   }, 1000)
      // }

      const showShortBreak = () =>{
        let mins = message ? 3 : 1;
        setMins(mins);
        setMessage(!message);
      }
    
      const handleStart = () => {
        setIsActive(!isActive);
      };
    
      const handleReset = () => {
        setIsActive(false);
        setMins(1);
        setSecs(0);
      };
    
      return (
        <div className="timer">
        <div className="message">
            {message && <h1>Take 5! New session in:</h1>}
          </div>
          <div className="message">
            {cyclesMessage && <h1>You need 15 now!</h1>}
          </div>
          <div className="timer">
            <h1>
              {timerMins}:{timerSecs}
            </h1>
          </div>
    
          <div className="cycles">
            <h1>Cycles: {cycles}</h1>
          </div>
          <button onClick={() => handleStart()}>
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      )
}

export default Timer
