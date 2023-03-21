const LengthSettings = ({name}) => {
  return (
    <div className={`${name}-settings-container`}>
      <h3 id={`${name}-label`} className="capitalize">{name} length</h3>
      <h3 id={`${name}-length`}>{name === 'session' ? '25' : '5'}</h3>
      <button id={`${name}-increment`}>+</button>
      <button id={`${name}-decrement`}>-</button> 
    </div>
  )
}

export default LengthSettings;