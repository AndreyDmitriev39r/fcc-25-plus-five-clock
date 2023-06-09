const StartStopButton = ({id, children, timerControl}) => { 
  return (
    <button
      id={id}
      className={`flex justify-center items-center font-bold shadow-xl hover:bg-zinc-200 active:bg-cyan-600 bg-lime-500 w-14 h-8 rounded-xl`}
      onClick={timerControl}
    >{children}
    </button>
  )
}

export default StartStopButton;