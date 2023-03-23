import { useState } from "react"

import Heading from "./Heading"
import LengthSettings from "./LengthSettings"
import SessionControl from "./SessionControl"

function App() {

  const defaultDuration = {
    session: 25,
    break: 5,
  }

  const defaultTimeLeft = {
    minutes: "25",
    seconds: "00"
  }

  const [isRunning, setIsRunning] = useState(() => "stopped");

  const [isSession, setIsSession] = useState(() => true);
  
  const [duration, setDuration] = useState(() => defaultDuration);
  
  const [timeLeft, setTimeLeft] = useState(() => defaultTimeLeft)
  
  const reset = () => {
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
        setTimeLeft({minutes: updatedDuration, seconds: '00'})
      } else if (name==="break" && !isSession) {
        setTimeLeft({minutes: updatedDuration, seconds: '00'})
      }      
    }
  }

  return (
    <div className="App max-w-[1000px] mx-auto flex flex-col flex-wrap gap-5 justify-center">
      <Heading />
      <SessionControl
        timeLeft={timeLeft}
        isSession={isSession}
        reset={reset}
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

export default App
