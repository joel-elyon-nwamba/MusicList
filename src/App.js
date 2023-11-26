
import Welcome from './Welcome';
import Login from './Login';
import Search from './Search';
import GetPlaylist from './Playlist';
import './App.css';

const clientId = "08a59a339ecc4f58bd386a822dc642f4";
const redirecturl = "http://localhost:3000";
const authEndPoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = "user-read-provate user-read-email";


window.localStorage.setItem("code_verifier", codeVerifier);

const params = {
  response_type: 'code',
  client_id: clientId,
  scope,
  redirect_uri: redirecturl,
}

authEndPoint.search = new URLSearchParams(params).toString();
window.location.href = authEndPoint.toString()

const getToken = async code => {

  // stored in the previous step
  let codeVerifier = localStorage.getItem('code_verifier');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirecturl,
    }),
  }

  localStorage.setItem('access_token', response.access_token);
}



function App() {

  return (
    <div className="App">
      <Welcome />
      <Login />
      <GetPlaylist />
      <Search />
    </div>
  );
}

export default App;
