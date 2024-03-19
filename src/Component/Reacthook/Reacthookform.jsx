import React from 'react';
import { useForm } from 'react-hook-form'
import './reacthook.css'

function Reacthookform() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onsubmit = (data) => {
        console.log(data);
    };

    console.log(errors)

    return (
        <div>
            <div className='body'>

                <h5>REGISTER FORM USING REACTHOOK</h5>
                <label>Name </label><br />
                <input type="text" placeholder='Enter your Name'{...register('name')} />
                <br />
                <br />
                <label>Age </label><br />
                <input type="text" placeholder='Enter your Age'{...register('age', )} />
                <br />
                <br />
                
                <label>Email </label><br />
                <input type="text" placeholder='Enter your Email'{...register('mail', { required:'Email is Required'})} />
                <p>{errors?.mail?.message}</p>
            
                <label>Password </label><br />
                <input type="text" placeholder='Enter your Password'{...register('passw', { required: true })} />
                <br />
                <br />
                <button className='button' onClick={handleSubmit(onsubmit)}>SUBMIT</button>


            </div>
        </div>
    )
}

export default Reacthookform;