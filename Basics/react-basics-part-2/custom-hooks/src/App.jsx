import {useState } from 'react'
import {useFetch} from './hooks/useFetch'
import {usePrev, usePrevUpdated} from './hooks/usePrev'

export function AppFetch() {
  const [current, setCurrent] = useState(1);
  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + current);
  console.log(`render no. ${counter}`);
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

export function AppPrev() {
  const [number, setNumber] = useState(0);
  const [anything, setAnything] = useState(false);
  const prevNumber = usePrevUpdated(number);
   return <>
   <button onClick={() => setNumber(n => n + 1)}>+</button>
   <button onClick={() => setNumber(n => n - 1)}>-</button>
   <button onClick={() => setAnything(a => !a)}>Cause a glitch</button>
   <br />
      <br />
      Current number: {number}
      <br />
      Previous number: {prevNumber}
   </>
}
