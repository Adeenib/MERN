import React, { useEffect, useState } from 'react';

const PersonCard = props => {
    console.log(props.res)
    return (
        <div id="noman">
            <ul>
                {props.res.map((pec, index) => {
                    return (

                        <li key={index}>{pec.name}</li>

                    )
                })}
            </ul>
        </div>
    );
}

export default PersonCard;
