import React, { useContext } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { stateContext } from '../contexts/ContextProvider'
import Header from '../views/Header'

function DefaultLayout() {

    const {token} = useContext(stateContext)

    if(!token){
        return <Navigate to='/login' />
    }
    return (
        <div>
           <Header />

            <Outlet />
        </div>
    )
}

export default DefaultLayout
