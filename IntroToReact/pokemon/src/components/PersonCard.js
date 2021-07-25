import React,{useEffect, useState} from 'react';

const PersonCard = props => {
    console.log(props.res)
    return(
        <div className="fetch" id="noman">
         {props.res.map((pec,index)=>{ 
                     return( 
                     <ul> 
                           <li>{pec.name}</li> 
                       </ul> 
                     ) 
         })}    
        </div>
    );
}

export default PersonCard;
