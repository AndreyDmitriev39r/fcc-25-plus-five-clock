const SetLengthButton = ({id, children}) => {  

  const bgColor = children === "+" ? "bg-green-500"
    : "bg-red-500";  

  return (
    <button
      id={id}
      className={`flex justify-center items-center w-8 h-6 text-2xl pb-1 rounded-full font-bold shadow-xl hover:bg-zinc-200 active:bg-cyan-600 ${bgColor} `}
    >{children}
    </button>
  )
}

export default SetLengthButton;