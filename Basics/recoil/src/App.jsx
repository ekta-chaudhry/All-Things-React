import { useState } from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom } from './store/atoms/counter'

function App() {
  return <RecoilRoot>
  <Counter></Counter>
  </RecoilRoot>
}

function Counter() {
    return <div>
        <CurrentCounter></CurrentCounter>
        <Increase ></Increase>
        <Decrease ></Decrease>
    </div>

}

function CurrentCounter() {
    const count = useRecoilValue(counterAtom);
    return <div>{count}</div>
}

function Increase() {
    const setCount = useSetRecoilState(counterAtom);
    function increase() {
        setCount(c => c + 1);
    }
    return <div>
        <button onClick={increase}>Increase</button>
        </div>
}

function Decrease() {
    const setCount = useSetRecoilState(counterAtom);
    function decrease() {
        setCount(c => c - 1);
    }
    return <div>
        <button onClick={decrease}>Decrease</button>
        </div>
}

export default App
