import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { stateContext } from '../contexts/ContextProvider'

function GuestLayout() {

    const {token} = useContext(stateContext)

    if(token){
        return <Navigate to='/' />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GuestLayout
