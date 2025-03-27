import { Card, Container, Col, Row, Badge } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import API_ROUTE_DATA from "../../constants";

function CardTag({tagName}) {
  return <Badge bg="secondary">{tagName}</Badge>
}

function MemoCard({title, author, publishDate, id, tags}) {
  const nav = useNavigate();
  
  return <Card
    onClick={(e) => {
      console.log(e);
      nav(`${id}`)
    }}
    style={{cursor: 'pointer'}}
  >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Author: {author}
        <br />
        Published: {publishDate}
      </Card.Text>
      <Card.Footer style={{display: "flex", gap: "2ex"}}>
        {tags.map(x => <CardTag key={x} tagName={x} />)}
      </Card.Footer>
    </Card.Body>
  </Card>
}

function MemoList({memoData, tags}) {
  return <Container>
    <h2 style={{margin: '1rem 0'}}>Memos:</h2>
    <Row style={{marginTop: '1rem', marginBottom: '1rem'}}>
      {Object.keys(memoData).map(key => (
        <Col key={key} xs={12/1} style={{margin:'1rem 0'}}>
          <MemoCard {...memoData[key]} id={key}/>
        </Col>
      ))}
    </Row>
  </Container>
}

export default MemoList