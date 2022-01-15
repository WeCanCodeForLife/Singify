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
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    
    window.location.hash = "";
    let _token = hash.access_token;
  
    if (_token) {
      setToken(_token)
      s.setAccessToken(_token);
      
      s.getPlaylist("37i9dQZEVXcFp4bdDgmGDr").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
    
    s.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
});

s.getUserPlaylists().then((playlists) => {
  dispatch({
    type: "SET_PLAYLISTS",
    playlists,
  });

});
      });
  }

      console.log("i have a token", hash) 
      
  }, []);

  console.log("that is the user", user)
  console.log("token" , token)

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
