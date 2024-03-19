import React, { Component, useEffect, useState } from 'react'
function Mountcomp() {
    const [name, setname] = useState('')
    const [count, setcount] = useState(0)

  
    useEffect(() => {
        setname('kpsankar')
        console.log('123456789')
    }, [])
    const addcount = () => {
        setcount(count + 1)
    }
    return (
        <>
            <h1>MOUNTING COMPONENT</h1>
            <h3>{name}</h3>
            <button onClick={addcount}> Add Count</button>
            {count}
        </>
    )
}
export default Mountcomp
