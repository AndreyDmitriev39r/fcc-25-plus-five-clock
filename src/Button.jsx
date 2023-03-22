const Button = ({id, children}) => {

  // styles

  const bgColor = children === "+" ? "bg-green-500"
    : children === "-" ? "bg-red-500"
    : children === "Reset" ? "bg-yellow-500"
    : "bg-lime-500";
  const settingsStyles = "w-8 h-6 text-2xl pb-1  rounded-full"
  const startAndResetStyles = "w-14 h-8 rounded-xl"

  return (
    <button
      id={id}
      className={`flex justify-center items-center font-bold shadow-xl hover:bg-zinc-200 active:bg-cyan-600 ${bgColor} ${children.length < 2 ? settingsStyles : startAndResetStyles}`}
    >{children}
    </button>
  )
}

export default Button;
