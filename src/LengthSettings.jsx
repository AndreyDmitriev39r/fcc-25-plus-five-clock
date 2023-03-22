import Button from "./Button";

const LengthSettings = ({name}) => {
  const bgColor = name === 'session'
    ? "bg-blue-300"
    : "bg-amber-300";
  return (
    <div
      id={`${name}-settings-container`}
      className='w-1/4 min-w-[175px] max-w-[250px] flex flex-col gap-1 p-2 rounded-lg'
    >
      <h3 id={`${name}-label`}
        className={`${bgColor} text-center text-xl font-medium italic capitalize rounded-md`}
      >
          {name} length
      </h3>
      <h3 id={`${name}-length`}
        className={`${bgColor} w-10 h-10 self-center flex justify-center items-center mt-1 rounded-full border border-lime-500 text-xl font-bold italic`}
      >
        {name === 'session' ? '25' : '5'}
      </h3>
      <div
        id={`${name}-length-btn-container`}
        className="py-1 px-3 self-center flex justify-center gap-4 w-fit rounded-lg"
      >
        <Button id={`${name}-increment`} children='+' />
        <Button id={`${name}-decrement`} children='-' />
      </div>
    </div>
  )
}

export default LengthSettings;