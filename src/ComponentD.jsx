import React ,{useState,useContext} from 'react'
import {UserContext} from './ComponentA'
function ComponentC(){
    
    const user= useContext(UserContext)
return(
    <div className='box'>
        <h1>
            ComponetC
        </h1>
        <h2>
            {`hello ${user}`}

        </h2>
        </div>
)
}
export default ComponentC