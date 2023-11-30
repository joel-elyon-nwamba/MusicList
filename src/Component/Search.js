import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Row, Card } from 
"react-bootstrap";
import React, { useState, useEffect } from "react"
import AlbumList from "./AlbumList";



const clientId = "08a59a339ecc4f58bd386a822dc642f4";
const secretId = "08e2a83512574c739906856d247fe99f";

function Search() {
  const [searchInput, setSearchInput] =  useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + secretId
    }
    fetch("https://accounts.spotify.com/api/token", authParams).then(result => result.json()).then(data => setAccessToken(data.access_token))
  }, []);

  async function search() {
      console.log(`search for ${searchInput}`);
      // get request  to search artist 
      const searchArtist = {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }

      const artist = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + "&type=artist", searchArtist).then(response => response.json()).then(data => { return data.artists.items[0].id})
      // get request with artist id grab all albums from artist
      const albumsReturned = await fetch("https://api.spotify.com/v1/artists/" + artist + "/albums" + '?include_groups=album&market=US&limit=50', searchArtist).then(response => response.json()).then(data => {
        console.log(data);
        setAlbums(data.items)
      });
      // Now we display the albums
  }

  console.log(albums)
  return(
    <div className="container">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl 
            placeholder="Search For Artist"
            type="input"
            onKeyDown={event => {
              if(event.key === "Enter") {
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          {/* <SearchInput onSearch={search} /> */}
          <Button onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {/* {albums.map((album, i) => {
            return(
              <Card>
              <Card.Img src={album.images[0].url} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
              </Card.Body>
            </Card>
            )
          })} */}
          <AlbumList albums={albums} />

        </Row>
      </Container>
    </div>
  )
}


export default Search