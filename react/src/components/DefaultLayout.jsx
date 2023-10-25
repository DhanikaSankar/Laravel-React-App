import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { stateContext } from '../contexts/ContextProvider'

function DefaultLayout() {

    const {token} = useContext(stateContext)

    if(!token){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DefaultLayout
