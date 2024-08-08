import './App.css'
import { Data } from './Data/Data'

function App() {

  return (
    <div>
      <Data opts={'data'}/>
      <Data opts={'error'}/>
      <Data opts={'loading'}/>
    </div>
  )
}

export default App
