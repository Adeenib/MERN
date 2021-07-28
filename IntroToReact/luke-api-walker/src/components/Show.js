import React from 'react'

function Show({ data }) {

    return (
        <div>
            <div>{data && Object.keys(data).map(
                (key, index) => <h1 key={index}>{key}: {data[key]}</h1>
            )}</div>
        </div>
    )
}

export default Show
