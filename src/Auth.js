import React, { useState, useEffect } from "react";

function Auth() {
  const [token, setToken] = useState("");

  function requestAuth() {
    const apiKey = "6a6d4a2734ec85bb67fc5eba7bc719e0";
    const callbackUrl = "http://musicfinder.com";
    const authUrl = `http://www.last.fm/api/auth/?api_key=${apiKey}&cb=${callbackUrl}`

    window.location.href = authUrl;
  }

  useEffect(() => {
    // handle the authentication
    function handleAuth() {
      const urlParams = new URLSearchParams(window.location.search);
      const authToken = urlParams.get("token");

      if(authToken) {
        setToken(authToken)
        fetchSesssion(authToken);
      }
    };
    handleAuth()
  }, []);

  async function fetchSession() {
    const apiKey = "6a6d4a2734ec85bb67fc5eba7bc719e0";

  }


  return(
    <div>
      
    </div>
  )
}

export default Auth
  // const handleLogin = () => {
  //   window.location.href = authUrl;
  // };

       