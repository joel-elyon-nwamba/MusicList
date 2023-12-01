import React from "react";
import "../AlbumList.css"
function AlbumList({ albums }) {
  return (
      <>
        {albums.map((album, i) => (
        <>
        <div key={i} className="flex-container-one">
          <img src={album.images[0].url} alt="" className="flex-two"/>
          </div>
          <br/>
            <h3 className="">{album.name}</h3>
  </>
      ))}
    </>
  );
}

export default AlbumList;