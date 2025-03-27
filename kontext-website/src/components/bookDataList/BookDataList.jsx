import { Card, Container, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import API_ROUTE_DATA from "../../constants";

function BookDataCard({title, author, publishDate, img, id}) {
  const nav = useNavigate();
  return <Card
    onClick={(e) => {
      console.log(e);
      nav(`${id}`)
    }}
    style={{cursor: 'pointer'}}
  >
    <Card.Img variant="top" src={API_ROUTE_DATA.url+API_ROUTE_DATA.routes.bookData.url+img.src} style={{maxHeight: '10rem', objectFit: 'cover'}} />
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

function BookDataList({bookDataList}) {
  return <Container>
    <h2 style={{margin: '1rem 0'}}>Book Info:</h2>
    <Row style={{marginTop: '1rem', marginBottom: '1rem'}}>
      {Object.keys(bookDataList).map(key => (
        <Col key={key} xs={12/1} sm={12/1} md={12/2} lg={12/3} xl={12/4} style={{margin:'1rem 0'}}>
          <BookDataCard {...bookDataList[key]} id={key}/>
        </Col>
      ))}
    </Row>
  </Container>
}

export default BookDataList