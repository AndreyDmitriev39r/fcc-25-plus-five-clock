const SessionControl = () => {
  return (
    <div className="session-control-container w-full">
      <h3 id="timer-label" className="text-center">Session</h3>
      <h3 id="time-left" className="text-center">25:00</h3>
      <div className="controllers-container flex flex-row justify-center">
        <button id="start_stop">Start</button>
        <button id="reset">Reset</button> 
      </div>      
    </div>
  )
}

export default SessionControl;