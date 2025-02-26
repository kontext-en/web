import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.scss'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Books from './pages/Books.jsx'
import BookPage from './pages/BookPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/web'>
      <Route index element={<Index />} />
      <Route path='books' element={<Books />} />
      <Route path='books/:id' element={<BookPage />} />
    </Route>
  )
)

function Routes({routes}) {
  return <div style={{minHeight: '100vh'}}>
    <RouterProvider router={router}/>
  </div>
}

export default Routes
