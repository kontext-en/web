import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import API_ROOT_URL from "../constants";
import './../styles/gdoc.css'

function Content({title, analysisId}) {

  const [htmlDoc, setHtmlDoc] = useState();

  useEffect(() => {
    fetch(API_ROOT_URL+`/docs/${analysisId}.html`)
    .then(data=>data.text())
    .then(data=>{
      console.log(data);
      setHtmlDoc(data);
    })
    .catch(err=>console.error(err));
  }, [])

  return <Container>
    <h2 style={{padding: '1em 0', fontSize: '3em'}}>{title||'Loading...'}</h2>
    <div className="gdoc" style={{fontSize: '1em', paddingBottom: '4em'}} dangerouslySetInnerHTML={{__html: htmlDoc}}/>
  </Container>
}

function AnalysisPage({}) {

  const {id} = useParams();
  const [analysisData, setAnalysisData] = useState();

  useEffect(() => {
    fetch(API_ROOT_URL+"/content.json")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setAnalysisData(data);
    })
    .catch(err=>console.error(err));
  }, [])

  return <>{analysisData&&<Content {...analysisData[id]} analysisId={id} />}</>
}

export default AnalysisPage