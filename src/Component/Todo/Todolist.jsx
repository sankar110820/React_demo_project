import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import "./todo.css"
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";


function Todolist() {
    const [input, setinput] = useState('')
    const [todo, settodo] = useState([])

    useEffect(() => {
        handlegetdata()
    }, []);

    const handlegetdata = async () => {
        const responce = await axios.get("http://localhost:3000/todoList")
        settodo(responce.data);
        handlegetdata()
        // console.log(responce);

    };

    const handleadd = () => {
        let body = {
            id: uuidv4(),
            task: input
        }
        axios.post("http://localhost:3000/todoList", body)
        handlegetdata();
    }

    const handledelet = async (deleteid) => {
        await axios.delete(`http://localhost:3000/todoList/${deleteid}`);
        alert('your Todo Deleted')
        handlegetdata();
    };

    const handleedit = async (index) => {
        const updatetask = prompt("Uptate Your Task", todo[index].task)
        let body = {
            id: todo[index].id,
            task: updatetask
        }
        await axios.put(`http://localhost:3000/todoList/${todo[index].id}`, body)

        handlegetdata();
    }


    return (
        <div>
            <div className='todobody'>

                <h5 className='todohead'> TODO LIST</h5>
                <div className='inputbox'>
                <input type="text" placeholder='Eter Your Task' onChange={(e) => setinput(e.target.value)} />
                
                <button onClick={handleadd}>Add</button>
            
                </div>
                {todo.map((da, i) => (

                    <div className='NED'>
                        <div key={i}>
                            <h6 >{i + 1}.{da.task}</h6>

                        </div>
                        <div className='ED'>
                            <button onClick={() => handleedit(i)} className='editbtn'><CiEdit /> </button>
                            </div>
                            <button  onClick={() => handledelet(da.id)} className='deletebtn'><AiTwotoneDelete /></button>
                        </div>
                


                ))
                }

            </div>

        </div >
    )
}

export default Todolist 