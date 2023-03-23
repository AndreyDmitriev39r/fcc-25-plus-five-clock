const ResetButton = ({id, children, reset}) => {  
  return (
    <button
      id={id}
      className={`flex justify-center items-center font-bold shadow-xl hover:bg-zinc-200 active:bg-cyan-600 bg-yellow-500 w-14 h-8 rounded-xl`}
      onClick={reset}
    >{children}
    </button>
  )
}

export default ResetButton;