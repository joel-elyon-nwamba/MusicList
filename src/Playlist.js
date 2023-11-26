import React, { useEffect, useState} from "react";
import axios from "axios";
const playListsEndpoint = "https://api.spotify.com/v1/playlists"

const GetPlaylist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"))
    }
  }, []);

  const handleGetPlaylists = () => {
    axios.get(playListsEndpoint, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(response => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return(
    <div>
      <button onClick={handleGetPlaylists}>Get Playlists</button>
      <h1>Add music to your play list</h1>
      <p>Start listening now to your own tune.</p>
    </div>
  )
}

export default GetPlaylist;