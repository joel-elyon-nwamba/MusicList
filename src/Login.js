import React from 'react';
import { useEffect } from 'react';

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

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
