import React, { createContext } from "react"


const AuthContext = createContext()


function AuthProvider({children}) {

  const context = {
    token: "true"
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}