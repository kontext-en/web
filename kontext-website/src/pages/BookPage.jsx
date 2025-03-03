import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import API_ROOT_URL from "../constants";
import './../styles/gdoc.css'

function Content({title, bookId}) {

  const [htmlDoc, setHtmlDoc] = useState();

  useEffect(() => {
    fetch(API_ROOT_URL+`/docs/${bookId}.html`)
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

function BookPage({}) {

  const {id} = useParams();
  const [bookData, setBookData] = useState();

  useEffect(() => {
    fetch(API_ROOT_URL+"/content.json")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setBookData(data);
    })
    .catch(err=>console.error(err));
  }, [])

  return <>{bookData&&<Content {...bookData[id]} bookId={id} />}</>
}

export default BookPage