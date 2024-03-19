import React, { useEffect, useState } from 'react';
import Cardcom from '../Common/Cardcom';

function Appcallcom() {
    const [fakedata, setfakedata] = useState([]);


    /* use effect not practice----*/
    useEffect(() => {
        handleapi()
        console.log('sankar')
    }, [])

    /* use effect not practice----*/

    const handleapi = async () => {
        const responce = await fetch("https://fakestoreapi.com/products");
        const data = await responce.json();
        setfakedata(data)
        // console.log('data');
    };
    return (
        <div >
            <div className='container'>
                <div className='row'>

                    {/* those comment bcs not use the time of card using------------------- */}
                    {/* <h1>API CALLING COMPONENT</h1>  */}
                    {/* <button onClick={handleapi}> API CALL</button> */}
                    {/* <Cardcom />-------bcs no image------- */}

                    {fakedata.map((todo, i) => (
                        <div className="col-3 mt-3" key={i}>
                            {/* <Cardcom data={todo}/>--another way---------------------------------- */}
                                <Cardcom title={todo.title} price={todo.price} img={todo.image} />
                            {/* <h5>{toto.title}</h5>
                    <img height='100px' width='100px' src={toto.image} /> */}
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Appcallcom;