
import { useEffect, useState } from 'react';
import App from '../App.jsx';
import BookList from '../components/bookList/BookList.jsx'
import API_ROOT_URL from "../tmpAPI";

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

  return <App>{bookData&&<BookList bookData={bookData} />}</App>
}

export default Books