import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import API_ROOT_URL from "../tmpAPI";

function Content({title, bookId}) {
  return <Container>
    <h2>{title||'Loading...'}</h2>
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