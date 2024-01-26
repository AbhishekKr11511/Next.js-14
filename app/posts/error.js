"use client"

// This is client side component
// If incase the page doesn't load, we neatly render this page,
// As the error page showing a specific message

import { useEffect } from "react"


const error = ({error, reset}) => {

    useEffect(()=>{
        // Log the error to an error reporting service
        console.log(error)
    }, [error])
    
    return (
        <div>
            <h1>Sorry something went wrong 404</h1>
            <button onclick={()=>reset()}>Go Back</button>

        </div>
        
    )
}
export default error