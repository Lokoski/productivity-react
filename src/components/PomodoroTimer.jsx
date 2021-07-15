import React, { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [mins, setMins] = useState(1);
  const [secs, setSecs] = useState(0);
  const [message, setMessage] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [cyclesMessage, setCyclesMessage] = useState(false);

  const timerMins = mins < 10 ? `0${mins}` : mins;
  const timerSecs = secs < 10 ? `0${secs}` : secs;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (secs === 0) {
        if (mins !== 0) {
          setSecs(59);
          setMins(mins - 1);
        } else {
            let mins = message ? 1 : 1;

            setMins(mins);
            setMessage(false);
            setCycles(cycles + 1);
            setCyclesMessage(false);
        }
      } else {
        setSecs(secs - 1);
      }

      if (cycles === 4) {
        let mins = cyclesMessage ? 2 : 1;

        setMessage(false);
        setCycles(0);
        setCyclesMessage(true);
        setMins(mins);
      } 
      
    }, 1000);
  }, [mins, secs, message, cycles, cyclesMessage]);

  return (
    <div className="pomodoro-container">
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
    </div>
  );
}
