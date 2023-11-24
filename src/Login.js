import React from 'react';
import { useEffect, useState } from 'react';




const clientId = "08a59a339ecc4f58bd386a822dc642f4";
const spotifyEndPoint = "https://accounts.spotify.com/authorize?";
const redirect_uri = "http://localhost:3000";
const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "playlist-modify-public", "user-library-modify"];
const SCOPES_URI_PARAMS = SCOPES.join("%20");

function Login() {

    function handleLogin() {
    const authUrl = `${spotifyEndPoint}client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${SCOPES_URI_PARAMS}&response_type=token&show_dialog=true`;
    window.location.href = authUrl;
  }


  function handleLogout() {
    setToken("");
    window.localStorage.removeItem("token");
  }

  // get token
  const [token, setToken] = useState("");


  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = " "
      window.localStorage.setItem("token", token)
      setToken(token)
    }
  }, []);

  return (
    <div className="Container">
      <header>
        <h1>Music Life!</h1>
        {!token ?
        <button className="btn" onClick={handleLogin}>Login
        </button>
        : <button onClick={handleLogout}>Logout</button>
        }
      </header>
    </div>
  );
}

export default Login;




  // const handleLogin = () => {
  //   window.location.href = authUrl;
  // };

// const authUrl = "https://accounts.spotify.com/authorize?client_id=08a59a339ecc4f58bd386a822dc642f4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing";
