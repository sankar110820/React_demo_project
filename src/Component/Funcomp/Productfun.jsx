import React, { useState } from 'react';
function Productfun() {
    const [count, setcount] = useState(0)
    const Addproduct = () => {
        setcount(count + 1)
    }
    const [name, setname] = useState('')
    const Addname = () => {
        setname('APPLE','ORANGE')
    }


    return (
        <>
            <h1>Productfun</h1>
            <h2>ProductCount - {count}</h2>
            <button onClick={Addproduct}>AddProductCount</button>
            <h3>ProductName-{name}</h3>
            <button onClick={Addname}>AddProductName</button>

        </>

    )
}
export default Productfun