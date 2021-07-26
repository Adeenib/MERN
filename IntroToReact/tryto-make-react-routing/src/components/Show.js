import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Show() {
    const { id, resource } = useParams();
    const [result, setResult] = useState("");

    const fetchSW = (resource, id) => {
        axios.get("https://swapi.dev/api/" + resource + "/" + id)
            .then(response => setResult(response.data)) //setResult(response.data.results))
            .catch(reject => setResult({ error: "These aren't the droids you're looking for" }))
    }

    useEffect(() => {
        fetchSW(resource, id);
    }, [resource, id])


    return (
        <>
            <h1>{result.name}</h1>
            {Object.keys(result).map(
                (key, index) => <p>{key}: {result[key]}</p>
            )}
        </>
    )
}

export default Show