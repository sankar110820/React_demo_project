import React, { useState } from 'react'
import { json } from 'react-router-dom'
function PractFunCom() {
  const [resdata, setresdata] = useState([])
  const [product, setproduct] = useState([])

  const handleapi = async () => {
    const getdata = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await getdata.json()
    setresdata(data)
    console.log(data)
  }

  const handleproduct = async () => {
    const getproduct = await fetch('https://jsonplaceholder.typicode.com/todos')
    const viewproduct = await getproduct.json()
    console.log(viewproduct)
    setproduct(viewproduct)

  }
  return (
    <div>
      <h1>API CALL</h1>
      <button onClick={handleapi}>Call Api</button>
      {resdata.map((datas, i) => (
        <div key={i}>
          <h5>{datas.title}</h5>
        </div>
      ))}
      <div>
        <h1>API CALL PRODUCT</h1>
        <button onClick={handleproduct}>View Product</button>
        {product.map((prdct, i) => (
          <div key={i}>
            <h4>{prdct.id}</h4>

            <div>
              {product.filter((da, i) => (
                <div key={i}> </div>

              ))}
            </div>

          </div>
        ))}




      </div>
    </div>


  );
}
export default PractFunCom
