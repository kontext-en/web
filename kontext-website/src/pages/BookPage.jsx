import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import BOOK_DATA from "../tmpAPI";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Content({title, bookId}) {
  return <Container>
    <h2>{title||'Loading...'}</h2>
  </Container>
}

function BookPage({}) {

  const {id} = useParams();

  return <>
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div>
        <Header />
        <Content {...BOOK_DATA[id]} bookId={id} />
      </div>
      <Footer />
    </div>
  </>
}

export default BookPage