import { Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import API_ROUTE_DATA from "../constants";
import Section from "../components/analysis/Section";
import Paragraph from "../components/analysis/Paragraph";
import Banner from "../components/banner/Banner";
import List from "../components/analysis/List";

function Content({id, elements, title, banner, metadata}) {

  return <Container style={{paddingTop: "2rem", paddingBottom: "4rem"}}>
    <h1 id="analysisTitle">{title}:</h1>
    {banner?.src&&<Banner style={{margin: "2rem 0"}} img={{'src':API_ROUTE_DATA.url+API_ROUTE_DATA.routes.bookData.url+banner.src, 'alt':banner.alt}} />}
    <hr/>
    {elements.map((e, i) => (<Row key={i}>
      {(e['type']==="section")&&<Section {...e} level={1} />}
      {(e['type']==="paragraph")&&<Paragraph {...e}/>}
      {(e['type']==="hr")&&<hr/>}
      {(e['type']==="list")&&<List {...e}/>}
    </Row>))}
  </Container>

}

function BookDataPage({}) {

  const {id} = useParams();
  const [contentData, setContentData] = useState();

  useEffect(() => {
    fetch(API_ROUTE_DATA.url+API_ROUTE_DATA.routes.bookData.url+`${id}/content.json`)
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
    <Content {...contentData} />
    :
    <Container><h2>Loading ...</h2></Container>
  )
}

export default BookDataPage