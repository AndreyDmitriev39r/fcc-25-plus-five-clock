import Heading from "./Heading"
import LengthSettings from "./LengthSettings"
import SessionControl from "./SessionControl"

function App() {
  return (
    <div className="App flex flex-row flex-wrap gap-6 justify-center border border-black">
      <Heading />
      <LengthSettings name="session"/>
      <LengthSettings name="break"/>
      <SessionControl />
    </div>
  )
}

export default App
