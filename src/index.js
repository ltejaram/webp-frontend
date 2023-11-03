import React from "react"
import dom from "react-dom"
import { BrowserRouter } from 'react-router-dom';
import App from "./app"
dom.render( <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode> ,document.getElementById("root"));