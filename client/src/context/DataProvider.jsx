import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import Cookies from 'js-cookie';

export const DataContext = createContext(null);

function DataProvider({children}) {

    const [account, setAccount] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
      const userCookie = Cookies.get('auth_token');
      if(userCookie){
          const user = JSON.parse(userCookie);
          setAccount(user.username);
      }
    }, [])

  return (
    <DataContext.Provider value={{
        account, 
        setAccount,
        token,
        setToken
    }}>
        {children} 
    </DataContext.Provider>
  )
}

export default DataProvider