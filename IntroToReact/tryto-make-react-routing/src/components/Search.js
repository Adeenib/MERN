import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import { BrowserRouter as Link, useHistory } from "react-router-dom";

function Search() {
    let history = useHistory();
    const [id, setId] = useState(0);
    const [resource, setResource] = useState("people");

    const handleResource = (e) => {
        setResource(e.target.value);
        history.push("/" + e.target.value + "/" + id);
    }

    const handleId = (e) => {
        history.push("/" + resource + "/" + e.target.value);
        setId(e.target.value);
    }

    return (


        <form className="searchBar" >

            <h1>Search for:</h1>

            <select value={resource} onChange={handleResource}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>

            <h1>ID:</h1>

            <input type="number" value={id} onChange={handleId} />
            <Link to={"/" + resource + "/" + id}> Search</Link>
            {/* <input className={styles.search} type="submit" value="Search"/> */}





        </form>

    )
}

export default Search