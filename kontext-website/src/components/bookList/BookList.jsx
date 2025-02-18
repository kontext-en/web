import { Stack, Card, Container } from "react-bootstrap"

function BookCard({title, author, publishDate, img}) {
  return <Card>
    <Card.Img variant="top" src={img.src} style={{maxHeight: '10rem', objectFit: 'cover'}} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Author: {author}
        <br />
        Published: {publishDate}
      </Card.Text>
    </Card.Body>
  </Card>
}

function BookList({bookData}) {
  return <Container>
    <h2>Books:</h2>
    <Stack>
      {bookData.map(data => <BookCard {...data}/>)}
    </Stack>
  </Container>
}

export default BookList