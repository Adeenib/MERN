import React, { useEffect } from 'react'
import EnhancedTable from '../basic/Table'
import { AuthorsContext } from '../context/authorsContext'
import { useContext } from 'react'
import axios from 'axios'
import { RoutesContext } from '../context/RoutesContext'
import CreateAuthor from './CreateAuthor'
import TheBlueButton from '../basic/TheBlueButton'
import { navigate } from '@reach/router'

function RenderAuthor() {
    const [routes, setRoutes] = useContext(RoutesContext)
    const [authors, setAuthors] = useContext(AuthorsContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let copyAuthors = { ...authors }
    useEffect(() => {
        setAuthors(copyAuthors)
    }, [copyAuthors])




    const DeleteHandle = (id) => {
        axios.delete(routes.Delete + id)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== id))

            })
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
            {authors.length > 0 ?

                <EnhancedTable OrderBy='name' rows={authors} title="We Have Quotes By" DeleteHandle={DeleteHandle} >
                    <TheBlueButton name="alaa" value='Edit' handleOnClick={NavigateHandle} />
                </EnhancedTable>
                :
                <CreateAuthor />
            }
        </>
    )
}

export default RenderAuthor
