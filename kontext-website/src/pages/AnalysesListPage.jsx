
import { useEffect, useState } from 'react';
import AnalysesList from '../components/analysesList/AnalysesList.jsx'
import API_ROUTE_DATA from "../constants.js";

function AnalysesListPage() {

  const [analysisData, setAnalysisData] = useState();

  useEffect(() => {
    fetch(API_ROUTE_DATA.url+API_ROUTE_DATA.routes.analyses.url+"directory.json")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setAnalysisData(data);
    })
    .catch(console.error);
  }, [])

  return <>{analysisData&&<AnalysesList analysisData={analysisData} />}</>
}

export default AnalysesListPage