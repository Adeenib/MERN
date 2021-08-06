import React, { useState, createContext } from 'react'
export const RoutesContext = createContext()
export const RoutesProvider = props => {
    const [routes, setRoutes] = useState({

        'home': "/",
        'NEW': "/new",
        'Create': 'http://localhost:8000/api/author/new/',
        'GetAll': "http://localhost:8000/api/author/",
        'Delete': 'http://localhost:8000/api/author/delete/',
        'edit': '/edit',
        'Edit': 'http://localhost:8000/api/author/update/'


    })

    return (
        <RoutesContext.Provider value={[routes, setRoutes]} >
            {props.children}
        </RoutesContext.Provider>
    )
}

