import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.scss'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Analysis from './pages/Analysis.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
      <Route index element={<Index/>}/>
      <Route path='analysis' element={<Analysis/>}/>
      <Route path='analysis/:id' element={<AnalysisPage/>}/>

      <Route path='web'>
        <Route index element={<Index/>}/>
        <Route path='analysis' element={<Analysis/>}/>
        <Route path='analysis/:id' element={<AnalysisPage/>}/>
      </Route>
    </Route>
  )
)

function Routes({routes}) {
  return <RouterProvider router={router}/>
}

export default Routes
