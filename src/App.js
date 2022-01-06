import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
function App() {
 
  useEffect(() => {
    const hash = getTokenFromResponse();
    console.log("i have a token", hash)
  }, []);

  return (
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
