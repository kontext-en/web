
import { useEffect, useState } from 'react';
import BookList from '../components/bookList/BookList.jsx'
import API_ROOT_URL from "../constants.js";

function Books() {

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

  return <>{bookData&&<BookList bookData={bookData} />}</>
}

export default Books