import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player";
import { useStateValue } from "./StateProvider";
const s = new SpotifyWebApi();

function App() {
  const [ token , setToken] = useState(null);
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    
    window.location.hash = "";
    let _token = hash.access_token;
  
    if (_token) {
      setToken(_token)

      s.setAccessToken(_token);
    }
    
    s.getMe().then((user) => {
      console.log(user)
      });
    

    console.log("i have a token", hash) 
  }, []);

  

  return (
    <div className="app">
      <Player/>
      { token ? (<h1>I am logged in</h1>):
      (<Login/>)}

      
    </div>
  );
}

export default App;
