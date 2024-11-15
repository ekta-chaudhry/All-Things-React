import { useEffect, useState } from 'react'
import {usePostTitle, useFetch} from './hooks/useFetch'

function App() {
  const [current, setCurrent] = useState(1);
  const post = useFetch("https://jsonplaceholder.typicode.com/posts/" + Number(current));
  return <div style={{height: "70px"}}>
    <button onClick={() => setCurrent(1)}>1</button>
    <button onClick={() => setCurrent(2)}>2</button>
    <button onClick={() => setCurrent(3)}>3</button>
    {JSON.stringify(post)}
  </div>
}

export default App
