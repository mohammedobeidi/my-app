import React ,{useContext, useState} from 'react'
import ComponentD from './ComponentD'
import { UserContext} from './ComponentA';
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
        <ComponentD user={user}/>
            
           
        </div>
)
}
export default ComponentC