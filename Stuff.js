import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";

function Stuff() {
    const [mystate, setmyState] = useState("");
    const addmyState = () => setmyState(document.title);

    const [adim, setAdim] = useState(0);
    const adimArttir = () => setAdim(adim + 1);

    const themes = {
        light: {
          foreground: "#000000",
          background: "#eeeeee"
        },
        dark: {
          foreground: "#ffffff",
          background: "#222222"
        }
      };

      const [x, setTheme] = useState(themes.dark);
      const themechange = () => setTheme(themes.light);
    
      
    useEffect(() => { document.title = "sadas" });
    return (
        <div style={x}>
            <h2>Stuff Sayfası</h2>
            <button onClick={themechange}>sssa</button>
            <h2>{adim} Adım attınız</h2>
            <h2>{mystate} <button onClick={addmyState}>tikla</button></h2>
            <button className="btn btn-primary" onClick={adimArttir}>adim at</button>
            <h2>Sevenleriyle Buluştu</h2>
            
            <Link className="nav-link btn active btn-outline-info" aria-current="page" to="/">Anasayfaya Dön</Link>
            <Route exact path="/"></Route>
        </div>
    )
}
export default Stuff;