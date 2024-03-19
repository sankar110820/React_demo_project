import React from 'react'

 function Useref() {
    let inputref= Useref(null)
    useEffect(()=>{
      inputref.current.focus()
    },[])


    
  return (
    <>  
    <div>Useref</div>
    <input ref={inputref} placeholder='Enter your Name' />



    </>
    
  )
}

export default Useref