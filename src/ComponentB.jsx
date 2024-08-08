import React ,{useState,useContext} from 'react';
import ComponentC from './ComponentC';
import {UserContext} from './ComponentA'
function ComponentB(){
    const user= useContext(UserContext)

    return(
        <div className='box'>
            <h1>
                ComponetB
            </h1>
            <h2>
                {`hello ${user}`}
              
             
          
            </h2>  
            <ComponentC user={user}/> 
             <ComponentC/>
            
            </div>
    )
}
export default ComponentB