import {useState } from 'react'
import {useFetch} from './hooks/useFetch'

function App() {
  const [current, setCurrent] = useState(1);
  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + current);
  if(loading) {
    return <div>
      Loading...
    </div>
  }
  return <div style={{height: "70px"}}>
    <button onClick={() => setCurrent(1)}>1</button>
    <button onClick={() => setCurrent(2)}>2</button>
    <button onClick={() => setCurrent(3)}>3</button>
    {JSON.stringify(finalData)}
  </div>
}

export default App
