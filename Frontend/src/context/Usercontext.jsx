import React from 'react'

const UserContext = React.createContext({
    user : {
        username : "username",
        password : "password",
        email : email,
        id : 1
    },
    loginUser : (username,password) => {},
    signinUser : (user) = {},
    logoutUser : (id) => {}
    
})

export const UserContextProvider = UserContext.Provider

export default UserContext
