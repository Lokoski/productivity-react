import React, { useState, useEffect } from "react";

function Timer() {

    const [mins, setMins] = useState(1);
    const [secs, setSecs] = useState(0);
    const [message, setMessage] = useState(false);
    const [cycles, setCycles] = useState(2);
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
              setCycles(cycles + 1);
            }else{
              showShortBreak();
            }
          }else {
            setSecs(secs - 1);
          }
        }, 1000);
      }

      const showShortBreak = () =>{
        let mins = message ? 3 : 1;
        setMins(mins);
        setMessage(!message);
      }
    
      const showLongBreak = () =>{
        let mins = cyclesMessage ? 1 : 2;
        setMins(mins);
        setCyclesMessage(!cyclesMessage);
        setCycles(0);
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
