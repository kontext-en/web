import { Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import API_ROOT_URL from "../constants";
import Section from "../components/analysis/Section";
import Paragraph from "../components/analysis/Paragraph";

function Content({id, elements, title, metadata}) {

  return <Container>
    <h1 id="analysisTitle">{title}</h1>
    {elements.map((e, i) => (<Row key={i}>
      {(e['type']==="section")&&<Section {...e} level={1} />}
      {(e['type']==="paragraph")&&<Paragraph {...e}/>}
    </Row>))}
  </Container>
}

function AnalysisPage({}) {

  const {id} = useParams();
  const [contentData, setContentData] = useState();

  useEffect(() => {
    fetch(`${API_ROOT_URL}/docs/${id}/content.json`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setContentData(data);
    })
    .catch(err=>console.error(err));
  }, [id])

  return (
    contentData
    ?
    <><Content {...contentData} /></>
    :
    <Container><h2>Loading ...</h2></Container>
  )
}

export default AnalysisPage