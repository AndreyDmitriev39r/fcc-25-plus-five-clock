import Button from "./Button";

const LengthSettings = ({name}) => {
  return (
    <div
      id={`${name}-settings-container`}
      className='w-1/4 min-w-[175px] max-w-[250px] flex flex-col gap-1 p-2 bg-lime-300 rounded-lg'
    >
      <h3 id={`${name}-label`}
        className={`${name === 'session' ? "bg-blue-200" : "bg-amber-200"} text-center text-xl font-medium italic capitalize rounded-md`}
      >
          {name} length
      </h3>
      <h3 id={`${name}-length`}
        className={`${name === 'session' ? "bg-blue-200" : "bg-amber-200"} w-10 h-10 self-center flex justify-center items-center my-2 rounded-full border border-lime-500 text-xl font-bold italic`}
      >
        {name === 'session' ? '25' : '5'}
      </h3>
      <Button id={`${name}-increment`} children='+'/>
      <Button id={`${name}-decrement`} children='-' />
    </div>
  )
}

export default LengthSettings;