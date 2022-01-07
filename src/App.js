import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [ token , setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    
    window.location.hash = "";
    let _token = hash.access_token;
  
   
  if (_token) {
    setToken(_token);
    }
    console.log("i have a token", hash) 
  }, []);

  return (
    <div className="app">
      { token ? (<h1>I am logged in</h1>):
      (<Login/>)}

      
    </div>
  );
}

export default App;
