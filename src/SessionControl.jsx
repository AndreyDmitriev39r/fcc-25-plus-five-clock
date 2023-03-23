import StartStopButton from "./StartStopButton";
import ResetButton from "./ResetButton";

const SessionControl = ({timeLeft, isSession, reset}) => {  
  return (
    <div id="session-control-container"
      className="self-center w-3/5 flex flex-col gap-3">
      <h3 id="timer-label"
      className="self-center w-1/2 min-w-[175px] max-w-[250px] bg-lime-400 text-center text-xl font-medium italic capitalize rounded-md"
      >{isSession ? "Session" : "Break"}
      </h3>
      <div id="controllers-container"
        className="mt-2 flex flex-row justify-center items-center gap-6"
      >
        <StartStopButton
          id="start_stop"
          children="Start"          
        />
        <h3 id="time-left"
        className="border border-black w-fit self-center p-2 bg-lime-300 text-neutral-900 font-mono font-bold italic text-2xl text-center rounded-lg"
        >{`${timeLeft.minutes}:${timeLeft.seconds}`}
        </h3>
        <ResetButton
          id="reset"
          children="Reset"
          reset={reset}          
        /> 
      </div>      
    </div>
  )
}

export default SessionControl;