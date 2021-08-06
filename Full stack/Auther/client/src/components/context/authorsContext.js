import { createContext } from "react"
import React, { useState, useEffect, useContext } from 'react'
import { RoutesContext } from './RoutesContext'
import axios from 'axios'
export const AuthorsContext = createContext();


export const AuthorsProvider = props => {
    const [authors, setAuthors] = useState([])
    const [laoded, setLaoded] = useState(false)
    const [routes, setRoutes] = useContext(RoutesContext)

    useEffect(() => {
        axios.get(routes.GetAll)
            .then(res =>
                setAuthors(res.data))
            .then(res =>
                setLaoded(true))


    }, [setAuthors])

    return (

        <>
            {laoded &&

                <AuthorsContext.Provider value={[authors, setAuthors]}>
                    {props.children}
                </AuthorsContext.Provider>
            }
        </>
    )
}