import './styles/custom.scss'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Books from './pages/Books.jsx'
import Header from './components/header/Header.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/kontext'>
      <Route index element={<Index />} />
      <Route path='books' element={<Books />} />
    </Route>
  )
)

function App({routes}) {
  return <RouterProvider router={router}/>
}

export default App
