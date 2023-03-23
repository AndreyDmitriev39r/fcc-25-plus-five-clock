const ResetButton = ({id, children}) => {   
  return (
    <button
      id={id}
      className={`flex justify-center items-center font-bold shadow-xl hover:bg-zinc-200 active:bg-cyan-600 bg-yellow-500 w-14 h-8 rounded-xl`}
    >{children}
    </button>
  )
}

export default ResetButton;