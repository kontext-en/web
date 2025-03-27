import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.scss'
import { Route, createRoutesFromElements, RouterProvider, createHashRouter } from 'react-router-dom'
import Index from './pages/Index.jsx'
import AnalysesListPage from './pages/AnalysesListPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AnnouncementsPage from './pages/AnnouncementsPage.jsx';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>

      <Route index element={<Index/>}/>
      <Route path='analysis' element={<AnalysesListPage/>}/>
      <Route path='announcements' element={<AnnouncementsPage/>}/>
      <Route path='analysis/:id' element={<AnalysisPage/>}/>

      <Route path='web'>
        <Route index element={<Index/>}/>
        <Route path='analysis' element={<AnalysesListPage/>}/>
        <Route path='announcements' element={<AnnouncementsPage/>}/>
        <Route path='analysis/:id' element={<AnalysisPage/>}/>
      </Route>
      
    </Route>
  )
)

function Routes({routes}) {
  return <RouterProvider router={router}/>
}

export default Routes
