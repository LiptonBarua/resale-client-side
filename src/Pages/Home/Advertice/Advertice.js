import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Advertices from './Advertices';

const Advertice = () => {
  
    const[advertices, setAdvertice]=useState([])
    useEffect(()=>{
      fetch(`https://assianment-server-12.vercel.app/products?advertice=true`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setAdvertice(data)
        
      })
    },[])


    return (
        <div className='my-10'>
           <h1 className='text-2xl text-center mb-6'>All Advertice</h1>
            <div className='grid grid-cols-3'>
              {
                advertices.map(advertice=><Advertices key={advertice._id} advertice={advertice}></Advertices>)
              }
        </div>
        </div>
    );
};

export default Advertice;