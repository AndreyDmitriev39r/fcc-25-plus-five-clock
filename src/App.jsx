import Heading from "./Heading"
import LengthSettings from "./LengthSettings"
import SessionControl from "./SessionControl"

function App() {
  return (
    <div className="App max-w-[1000px] mx-auto flex flex-col flex-wrap gap-5 justify-center">
      <Heading />
      <SessionControl />
      <div id="settings-container"
        className="flex flex-row justify-center gap-2"
      >
        <LengthSettings name="session"/>
        <LengthSettings name="break"/>      
      </div>
    </div>
  )
}

export default App
