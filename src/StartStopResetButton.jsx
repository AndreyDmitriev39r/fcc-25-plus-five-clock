const StartStopResetButton = ({id, children}) => {  

  const bgColor = children === "Start" ? "bg-lime-500" : "bg-yellow-500"; 
 
  return (
    <button
      id={id}
      className={`flex justify-center items-center font-bold shadow-xl hover:bg-zinc-200 active:bg-cyan-600 ${bgColor} w-14 h-8 rounded-xl`}
    >{children}
    </button>
  )
}

export default StartStopResetButton;