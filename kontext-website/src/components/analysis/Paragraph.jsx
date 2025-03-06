import { Fragment } from "react"
import { Image } from "react-bootstrap"

function Paragraph({elements}) {
  return <p>
    {elements?.map((e,i) => <Fragment key={i}>
      {(e['type']==="text")&&e['content']}
      {(e['type']==="image")&&<Image {...e} fluid />}
      {(e['type']==="hr")&&<hr/>}
      {(e['type']==="link")&&<a href={e['href']}>{e['text']['content']}</a>}
    </Fragment>)}
  </p>
}

export default Paragraph