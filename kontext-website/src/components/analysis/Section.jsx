import { Container, Row } from "react-bootstrap"
import Paragraph from "./Paragraph"

function Heading({level, children}) {
  if ((level === null) || (level === undefined))
    return <>{children}</>
  
  if (level <= 1)
    return <h1>{children}</h1>
  switch (level) {
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    default:
      return <h6>{children}</h6>
  }
}

function Section({heading, elements, level}) {
  return <Container>
    <Heading level={level}>{heading}</Heading>
    {elements?.map((e, i) => <Row key={i}>
      {(e['type']==="section")&&<Section {...e} level={level+1}/>}
      {(e['type']==="paragraph")&&<Paragraph {...e}/>}
    </Row>)}
  </Container>
}

export default Section