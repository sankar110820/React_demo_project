import React, { useState } from 'react'

import './groceryprojc.css'

function Groceryprojc() {
    const [input, setinput] = useState('');
    const [show, setshow] = useState(false);

    const handleinput = (e) => {
        setinput(e.target.value)
    }
    const Additem = () => {
        setshow(true)

    }
    return (
        <div>
            <div  >

                <h3 > Grocery Bud</h3>
                <input onChange={handleinput} />
                <button onClick={Additem}>Add item</button>

            </div>
            {show &&
                <div>

                    <h6 >{input}</h6>
                </div>
            }

        </div>
    )
}

export default Groceryprojc