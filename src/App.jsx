import { useState } from "react"

import Heading from "./Heading"
import LengthSettings from "./LengthSettings"
import SessionControl from "./SessionControl"

function App() {

  const defaultDuration = {
    session: 25,
    break: 5,
  }  

  const [duration, setDuration] = useState(() => defaultDuration);

  const [timeLeft, setTimeLeft] = useState(() => `25:00`)

  const changeDuration = (operator, name) => {    
    const updatedDuration = operator === "+"
      ? duration[name] + 1
      : duration[name] - 1;
    if (updatedDuration > 60 || updatedDuration < 1) return;
    setDuration(prevDuration => ({...prevDuration, [name] : updatedDuration}));
  }

  const reset = () => {
    setDuration(defaultDuration);
    setTimeLeft(`25:00`);
  }

  return (
    <div className="App max-w-[1000px] mx-auto flex flex-col flex-wrap gap-5 justify-center">
      <Heading />
      <SessionControl
        timeLeft={timeLeft}
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
