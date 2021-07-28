import React from 'react'
import { useState } from 'react'
import { navigate } from '@reach/router'
import Show from './Show'

function Search({ handleInformation }) {


    const handleSubmit = (e) => {
        e.preventDefault()
        handleInformation(e.target.typeOfSearch.value, e.target.id.value)
        console.log(e.target.id.value)
        navigate(`/${e.target.typeOfSearch.value}/${e.target.id.value}/`)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Search for :
                <select name="typeOfSearch" id="typeOfSearch"   >

                    <option value="">choose</option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                ID:
                <input name="id" type="number" />
                <input type="submit" value="Search" />
            </form>

        </div>
    )
}

export default Search
