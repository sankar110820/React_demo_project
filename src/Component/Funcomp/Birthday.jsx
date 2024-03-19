import React, { useState } from 'react';
import './birthday.css'

const Birthday = () => {
  const [data, setdata] = useState([

    {

      id: 1,

      name: 'Bertie Yates',

      age: 29,

      image:

        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',

    },

    {

      id: 2,

      name: 'Hester Hogan',

      age: 32,

      image:

        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',

    },

    {

      id: 3,

      name: 'Larry Little',

      age: 36,

      image:

        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',

    },

    {

      id: 4,

      name: 'Sean Walsh',

      age: 34,

      image:

        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',

    },

    {

      id: 5,

      name: 'Lola Gardner',

      age: 29,

      image:

        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',

    },

  ])
  const clrall=()=>{
    setdata([])
  }
  return (

    <>
      <main className='box'>
        <h3>{data.length} Birthdays Today</h3>
        {data.map((da) => (

          <div className='inline'>
            <img src={da.image} className='photo' />
            <div>
              <h5 className='name'>{da.name} </h5>
              <h6 className='age'>{da.age} years</h6>

            </div>
            </div>
          ))}
        <button onClick={clrall} className='bton'>Clear All</button>
      </main>


    </>
  )


}
export default Birthday
