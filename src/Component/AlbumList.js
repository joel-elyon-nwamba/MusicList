import React from "react";
import {Row, Container, Card} from "react-bootstrap";
import "../AlbumList.css"
function AlbumList({ albums }) {
  return (
    
    <div className="flex-container">
        {albums.map((album, i) => (
        <div key={i} className="flex-item">
          <img src={album.images[0].url} alt="" className="album-image"/>
          <br/>
          <h3 className="album-title">{album.name}</h3>
       </div>
      ))}
      </div>
  )
}

export default AlbumList;
