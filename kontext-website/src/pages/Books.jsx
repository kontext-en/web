
import App from '../App.jsx';
import BookList from '../components/bookList/BookList.jsx'
import BOOK_DATA from "../tmpAPI";

function Books() {
  return <App><BookList bookData={BOOK_DATA} /></App>
}

export default Books