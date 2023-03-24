import { useState, useEffect, useRef } from "react"

import Heading from "./Heading"
import LengthSettings from "./LengthSettings"
import SessionControl from "./SessionControl"

function App() {

  const beepRef = useRef(null);

  let timerInt = null;

  const defaultDuration = {
    session: 25,
    break: 5,
  }

  const defaultTimeLeft = 1500;

  const [isRunning, setIsRunning] = useState(() => "stopped");

  const [isSession, setIsSession] = useState(() => true);
  
  const [duration, setDuration] = useState(() => defaultDuration);
  
  const [timeLeft, setTimeLeft] = useState(() => defaultTimeLeft)
  
  const reset = () => {
    beepRef.current.load();
    setDuration(defaultDuration);
    setTimeLeft(defaultTimeLeft);
    setIsSession(true);
    setIsRunning("stopped");
  }

  const changeDuration = (operator, name) => {

    const updatedDuration = operator === "+"
      ? duration[name] + 1
      : duration[name] - 1;
    if (updatedDuration > 60 || updatedDuration < 1) return;
    setDuration(prevDuration => ({...prevDuration, [name] : updatedDuration}));
    
    if (isRunning === "stopped") {
      if (name === "session" && isSession) {
        setTimeLeft(updatedDuration * 60)
      } else if (name==="break" && !isSession) {
        setTimeLeft(updatedDuration * 60)
      }      
    }
  }

  const timerControl = () => {
    setIsRunning(prevIsRunning =>
      prevIsRunning === "stopped" ? "running"
        : prevIsRunning === "running" ? "paused"
        : "running"
    )
  }  

  useEffect(() => {    
    if (isRunning === "running") {
      timerInt = setInterval(() => {        
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1)}, 1000);
    } else if (isRunning === "paused" || isRunning === "stopped") {      
      clearInterval(timerInt);
      timerInt = null;
    }
    return () => {
      clearInterval(timerInt);
      timerInt = null;      
    }
  }, [isRunning])

  useEffect(() => {    
    if (timeLeft === 0) {
      setIsRunning('stopped')
      setTimeout(() => {
        beepRef.current.play();
        if (isSession) {
          setTimeLeft(duration.break * 60);
        } else if (!isSession) {
          setTimeLeft(duration.session * 60);
        }
        setIsSession(prevIsSession => !prevIsSession)
        setIsRunning('running');
      }, 100)
    }
  }, [timeLeft])

  return (
    <div className="App max-w-[1000px] mx-auto flex flex-col flex-wrap gap-5 justify-center">
      <audio id="beep" src="https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3" type="audio/mp3" ref={beepRef}></audio>
      <Heading />
      <SessionControl
        timeLeft={timeLeft}
        isSession={isSession}
        isRunning={isRunning}
        reset={reset}
        timerControl={timerControl}
      />
      <div id="settings-container"
        className="flex flex-row justify-center gap-2"
      >
        <LengthSettings
          name="session"
          duration={duration.session}
          changeDuration={changeDuration}
        />
        <LengthSettings
          name="break"
          duration={duration.break}
          changeDuration={changeDuration}          
        />      
      </div>
    </div>
  )
}

export default App;
