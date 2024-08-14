import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {CountDown} from './hooks/useCounterDown'

function App() {
  const Number = CountDown(5 * 1000, () => console.log("Hello"))

  console.log("Number",Number );
  return (
    <>
     {Number/1000}
    </>
  )
}

export default App
