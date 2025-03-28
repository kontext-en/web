import { Card, Container, Col, Row, Badge } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import API_ROUTE_DATA from "../../constants";

function CardTag({tagName}) {
  return <Badge bg="secondary">{tagName}</Badge>
}

function PersonCard({name, img, linkTo, roles}) {
  return <Card
    onClick={(e) => {
      console.log(e);
      window.open(linkTo, '_blank');
    }}
    style={{cursor: 'pointer'}}
  >
    <Card.Img
      variant = "top"
      src = {API_ROUTE_DATA.url+API_ROUTE_DATA.routes.people.url+img.src}
      alt = {img.alt}
      style = {{maxHeight: '10rem', objectFit: 'cover'}}
    />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Footer style={{display: "flex", gap: "2ex"}}>
        {roles.map(x => <CardTag key={x} tagName={x} />)}
      </Card.Footer>
    </Card.Body>
  </Card>
}

function PeopleList({people, roles}) {
  return <Container>
    <h2 style={{margin: '1rem 0'}}>People:</h2>
    <Row style={{marginTop: '1rem', marginBottom: '1rem'}}>
      {Object.keys(people).map(key => (
        <Col key={key} xs={12/2} sm={12/2} md={12/3} lg={12/4} xl={12/6} style={{margin:'1rem 0'}}>
          <PersonCard {...people[key]} id={key}/>
        </Col>
      ))}
    </Row>
  </Container>
}

export default PeopleList