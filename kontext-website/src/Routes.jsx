import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.scss'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Books from './pages/Books.jsx'
import BookPage from './pages/BookPage.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
      <Route index element={<Index/>}/>
      <Route path='books' element={<Books/>}/>
      <Route path='books/:id' element={<BookPage/>}/>

      <Route path='web'>
        <Route index element={<Index/>}/>
        <Route path='books' element={<Books/>}/>
        <Route path='books/:id' element={<BookPage/>}/>
      </Route>
    </Route>
  )
)

function Routes({routes}) {
  return <RouterProvider router={router}/>
}

export default Routes
