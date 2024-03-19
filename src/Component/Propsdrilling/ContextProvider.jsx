import React, { useState } from 'react'
import CounterContext from '../Context/CounterContext'

 function ContextProvider() {
    const[count,setcount]=useState(0)

    const Increment =()=>{
        setcount(count+1)
    }
  return(
    <CounterContext.Provider value={{count,Increment}}>

    </CounterContext.Provider>

  )
}

export default ContextProvider