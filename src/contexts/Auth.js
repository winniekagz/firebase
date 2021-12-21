import React ,{useContext,useState,useEffect} from 'react'
import {auth} from "../firebase"

const authContext = React.createContext("Default value")

export function useAuth(){
    return useContext(authContext)
}


export  function AuthProv({children}) {
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)

    function register(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function Login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout(){
        return auth.signOut()
    }

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user =>{
            setLoading(false)
            setCurrentUser(user)
        })
    return unsubscribe

    },[])
        const value={
        currentUser,
        register,
        Login,
        logout
    }
    return (
        <authContext.Provider value={value}>
            {/* if not loading render children */}
            {!loading&&children}

        </authContext.Provider>
    )
}
