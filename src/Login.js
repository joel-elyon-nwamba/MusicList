import React from 'react';
import { useEffect, useState } from 'react';
import "./Login.css"

const clientId = "08a59a339ecc4f58bd386a822dc642f4";
const redirectUrl = "http://localhost:3000";

const authEndPoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = "user-read-private user-read-email";


// const currentToken = {
//   get access_token() { return localStorage.getItem('access_token') || null; },
//   get refresh_token() { return localStorage.getItem('refresh_token') || null; },
//   get expires_in() { return localStorage.getItem('refresh_in') || null; },
//   get expires() { return localStorage.getItem('expires') || null; },

//   save: function (response) {
//     const { access_token, refresh_token, expires_in } = response;
//     localStorage.setItem('access_token', access_token);
//     localStorage.setItem('refresh_token', refresh_token);
//     localStorage.setItem('refresh_in', expires_in);

//     const now = new Date();
//     const expiry = new Date(now.getTime() + (expires_in * 1000));
//     localStorage.setItem('expires', expiry);
//   }
// };
async function generateRandomString(length) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
    for (let i = 0; i < length; i++) {
  randomString += possible.charAt(Math.floor(Math.random() * possible.length));
}
return randomString;
}

async function sha256(plain) {
const encoder = new TextEncoder();
const data = encoder.encode(plain);
const hashBuffer = await crypto.subtle.digest('SHA-256', data);
const hashArray = Array.from(new Uint8Array(hashBuffer));
return hashArray.map(byte => String.fromCharCode(byte)).join('');
}

function Login() {

  const [currentToken, setCurrentToken] = useState(null);


  async function redirectToSpotify() {
  

    const code_verifier = await generateRandomString(64);
    const codeChallenge = await sha256(code_verifier)

    window.localStorage.setItem("code_verifier", code_verifier);

    const authenUrl = new URL(authEndPoint);

    const params = {
      response_type: "code",
      client_id: clientId,
      scope: scope,
      code_challenge_method: "S256",
      code_challenge: btoa(codeChallenge),
      redirect_uri: redirectUrl,
    };

    authenUrl.search = new URLSearchParams(params).toString();
    window.location.href = authenUrl.toString();
  }
  async function loginWithSpotify(){
    await redirectToSpotify();
  }

  async function logoutClick() {
    localStorage.clear();
    window.location.href = redirectUrl
  }


  useEffect(() => {
    async function refreshToken() {
      const apiResponse = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: 'refresh_token',
          refresh_token: localStorage.getItem('refresh_token'),
        }),
      });
    
      const responseData = await apiResponse.json();
      console.log('API Response:', responseData);  // Add this line for debugging
    
      return responseData;
    }

      async function refreshTokenClick() {
        try {
          const token = await refreshToken();
          console.log('Token:', token);  // Add this line for debugging
          localStorage.setItem('access_token', token.access_token);
          setCurrentToken(token.access_token);
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      }
      
      refreshTokenClick()
  }, [currentToken]);
  return(
    <div className="container">
      <button className="btn" onClick={loginWithSpotify}>Login</button>
      <button onClick={logoutClick}>Logout</button>
    </div>
  )
}

export default Login;



  // const handleLogin = () => {
  //   window.location.href = authUrl;
  // };

       