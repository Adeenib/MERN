import React, { useEffect, useState } from 'react'
import EnhancedTable from '../basic/Table'
import { useContext } from 'react'
import axios from 'axios'
import { RoutesContext } from '../context/RoutesContext'
import TheBlueButton from '../basic/TheBlueButton'
import { navigate } from '@reach/router'
import CreateAuthor from './CreateAuthor'

function RenderAuthor() {
    const [routes, setRoutes] = useContext(RoutesContext)
    const [laoded, setLaoded] = useState(false)
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get(routes.GetAll)
            .then(res =>
                setAuthors(res.data))
            .then(res =>
                setLaoded(true))


    }, [])


    const DeleteHandle = (id) => {

        axios.delete(routes.Delete + id)
            .then(res => { })




    }




    // (e) => console.log(e.target.parentElement.abbr)
    const NavigateHandle = (e) => {
        e.target.parentElement.abbr ?
            navigate(routes.edit + '/' + e.target.parentElement.abbr)
            :
            navigate(routes.edit + '/' + e.target.parentElement.parentElement.abbr)
    }

    return (
        <>

            {laoded &&

                <EnhancedTable OrderBy='name' rows={authors} title="We Have Quotes By" DeleteHandle={DeleteHandle} >
                    <TheBlueButton value='Edit' handleOnClick={NavigateHandle} />
                </EnhancedTable>


            }
        </>
    )
}

export default RenderAuthor
