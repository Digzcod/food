import React from 'react'
import { createBrowserRouter, useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError()
    console.log(err)
  return (
    <section style={{display:'grid', justifyContent:'center', margin: '10rem'}}>
        <h1>Oops!!!</h1>
        <h1>Something went wrong</h1>
        <h3>{err.error.message}: {err.status}</h3>
        {/* <p>{err}</p> */}
    </section>
  )
}

export default Error