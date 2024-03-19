import React, { useState } from "react";
import './formcss.css'
function Formreact() {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [email, setemail] = useState('')
    const [show, setshow] = useState(false)
    const [done, setdone] = useState(false)

    const addname = (e) => {
        setname(e.target.value)
        // console.log('kpsankar')
    }
    const addage = (e) => {
        setage(e.target.value)
    }
    const addemail = (e) => {
        setemail(e.target.value)
    }
    const showform = (e) => {
        e.preventDefault()
        setshow(true)
    }
    const handledone = (e) => {
        e.preventDefault()
        setdone(true)
    }
    return (
        <div >
            <div className="body">
                <h3>REGISTER FORM</h3>
                {/* {show ?----------------------------------------------------------------tommorro */}
                    <form >

                        <label>Name </label>
                        <input placeholder="Enter Your Name" onChange={addname} />
                        <br />
                        <br />
                        <label>Age </label>
                        <input placeholder="Enter Your Age" onChange={addage} />
                        <br />
                        <br />
                        <label>Email</label>
                        <input placeholder="Enter Your Email" onChange={addemail} />
                        <br />
                        <br />
                        <button onClick={showform}>SUPMIT</button>
                    </form> :
                    <h6> Your Responce Saved </h6>
                {/* } ------------------------------------------------------------------------------*/}

                {show && <div>
                    <h6>Name:{name}</h6>
                    <h6>Age:{age}</h6>
                    <h6>Email:{email}</h6>
                    <button onClick={handledone}>done</button>
                </div>}
                {done && <div><h6>Your responce saved</h6> </div>}

            </div>
        </div>
    )
}
export default Formreact