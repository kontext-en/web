import { Container, Row } from "react-bootstrap"
import Paragraph from "./Paragraph"

function Heading({level, children}) {

  if ((level === null) || (level === undefined))
    return <>{children}</>
  
  if (level <= 1)
    return <h1 style={{fontSize: "2.5rem"}}>{children}</h1>
  switch (level) {
    case 2:
      return <h2 style={{fontSize: "2.25rem"}}>{children}</h2>
    case 3:
      return <h3 style={{fontSize: "2rem"}}>{children}</h3>
    case 4:
      return <h4 style={{fontSize: "1.75rem"}}>{children}</h4>
    case 5:
      return <h5 style={{fontSize: "1.5rem"}}>{children}</h5>
    default:
      return <h6 style={{fontSize: "1.25rem"}}>{children}</h6>
  }
}

function Section({heading, elements, level}) {
  return <Container>
    <Heading level={level}>{heading}</Heading>
    {elements?.map((e, i) => (
        (e['type']==="hr")?
        <hr key={i}/>
        :
        <Row key={i}>
          {(e['type']==="section")&&<Section {...e} level={level+1}/>}
          {(e['type']==="paragraph")&&<Paragraph {...e}/>}
        </Row>
    ))}
  </Container>
}

export default Section