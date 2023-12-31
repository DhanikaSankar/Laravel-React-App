import React, { createContext, useState } from 'react'


export const stateContext = createContext({
   user:null,
   token:null,
   setUser:()=>{},
   setToken:()=>{}
})


function ContextProvider({children}) {

    const [user, setUser] = useState({ name:"Dhanika"})
    // const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    // const [token,_setToken] = useState(1234);
    const [token,_setToken] = useState(null);

    function setToken(token){
        _setToken(token)

        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

  return (
    <stateContext.Provider  value={{user,token,setToken,setUser}}>
        {children}
    </stateContext.Provider>
  )
}

export default ContextProvider
