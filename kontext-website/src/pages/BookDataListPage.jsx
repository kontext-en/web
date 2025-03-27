import { useEffect, useState } from 'react';
import BookDataList from '../components/bookDataList/BookDataList.jsx'
import API_ROUTE_DATA from "../constants.js";

function BookDataListPage() {

  const [bookDataList, setBookDataList] = useState();

  useEffect(() => {
    fetch(API_ROUTE_DATA.url+API_ROUTE_DATA.routes.bookData.url+"directory.json")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setBookDataList(data);
    })
    .catch(console.error);
  }, [])

  return <>{bookDataList&&<BookDataList bookDataList={bookDataList} />}</>
}

export default BookDataListPage