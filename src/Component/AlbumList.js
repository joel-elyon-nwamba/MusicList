import React from "react";
import { Container,  Row, Card } from "react-bootstrap";

function AlbumList( {albums} ) {
  return (
    <div className="row row-cols-7">
      <Container>
        <Row className="mx-6 row row-cols-8">
      {albums.map((album, i) => (
        <Card>
          <Card.Img src={album.images[0].url} />
          <Card.Body>
            <Card.Title>{album.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </Container>
    </div>
  );
}

export default AlbumList;