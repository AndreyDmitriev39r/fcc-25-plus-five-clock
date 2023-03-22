import Button from "./Button";

const SessionControl = () => {
  return (
    <div className="self-center session-control-container w-3/5 flex flex-col gap-3">
      <h3 id="timer-label"
      className="self-center w-1/2 min-w-[175px] max-w-[250px] bg-lime-400 text-center text-xl font-medium italic capitalize rounded-md"
      >Session</h3>
      <h3 id="time-left"
      className="border border-black w-fit self-center p-2 bg-lime-300 text-neutral-900 font-mono font-bold italic text-2xl text-center rounded-lg"
      >25:00
      </h3>
      <div className="controllers-container flex flex-row justify-center gap-6">
        <Button id="start_stop" children="Start" />
        <Button id="reset" children="Reset" /> 
      </div>      
    </div>
  )
}

export default SessionControl;