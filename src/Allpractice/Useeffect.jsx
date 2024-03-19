import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [name, setname] = useState('')
    const [count, setcount] = useState(0)


    useEffect(() => {
        setname('kpsankar')

    })
    const handleadd = () => {
        setcount(count + 2)
    }

    return (
        <div>
            <h2>USEEFFECT</h2>
            <h5>My Name is {name}</h5>
            <h6>Count - {count}</h6>
            <button onClick={handleadd}> Add Count</button>




        </div>
    )
}
export default Useeffect