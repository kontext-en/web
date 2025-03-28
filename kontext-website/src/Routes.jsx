import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.scss'
import { Route, createRoutesFromElements, RouterProvider, createHashRouter } from 'react-router-dom'
import Index from './pages/Index.jsx'
import AnalysesListPage from './pages/AnalysesListPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import WritersNookListPage from './pages/WritersNookListPage.jsx';
import MemoPage from './pages/MemoPage.jsx';
import BookDataListPage from './pages/BookDataListPage.jsx';
import BookDataPage from './pages/BookDataPage.jsx';
import PeoplePage from './pages/PeoplePage.jsx';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>

      <Route index element={<Index/>}/>
      <Route path='analysis' element={<AnalysesListPage/>}/>
      <Route path='analysis/:id' element={<AnalysisPage/>}/>
      <Route path='writersnook' element={<WritersNookListPage/>}/>
      <Route path='writersnook/:id' element={<MemoPage/>}/>
      <Route path='bookdata' element={<BookDataListPage/>}/>
      <Route path='bookdata/:id' element={<BookDataPage/>}/>
      <Route path='people' element={<PeoplePage/>}/>

      <Route path='web'>
        <Route index element={<Index/>}/>
        <Route path='analysis' element={<AnalysesListPage/>}/>
        <Route path='analysis/:id' element={<AnalysisPage/>}/>
        <Route path='writersnook' element={<WritersNookListPage/>}/>
        <Route path='writersnook/:id' element={<MemoPage/>}/>
        <Route path='bookdata' element={<BookDataListPage/>}/>
        <Route path='bookdata/:id' element={<BookDataPage/>}/>
        <Route path='people' element={<PeoplePage/>}/>
      </Route>
      
    </Route>
  )
)

function Routes({routes}) {
  return <RouterProvider router={router}/>
}

export default Routes
