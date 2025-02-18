
import BookList from '../components/bookList/BookList.jsx'
import Footer from '../components/footer/Footer.jsx'
import Header from '../components/header/Header.jsx'

const BOOK_DATA = [
  {
    title: 'Title1',
    author: 'Author',
    publishDate: '14/02/2019',
    img: {
      src: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg',
      alt: 'AltText',
    },
  },
  {
    title: 'Title2',
    author: 'Author',
    publishDate: '14/02/2019',
    img: {
      src: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg',
      alt: 'AltText',
    },
  },
  {
    title: 'Title3',
    author: 'Author',
    publishDate: '14/02/2019',
    img: {
      src: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg',
      alt: 'AltText',
    },
  },
  {
    title: 'Title4',
    author: 'Author',
    publishDate: '14/02/2019',
    img: {
      src: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg',
      alt: 'AltText',
    },
  },
]

function Books() {
  return (
    <>
      <div style={{height: '100%', paddingBottom: '7rem'}}>
        <Header />
        <BookList bookData={BOOK_DATA} />
      </div>
      <Footer />
    </>
  )
}

export default Books