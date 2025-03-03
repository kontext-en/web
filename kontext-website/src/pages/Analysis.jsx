
import { useEffect, useState } from 'react';
import AnalysisList from '../components/analysisList/AnalysisList.jsx'
import API_ROOT_URL from "../constants.js";

function Analysis() {

  const [analysisData, setAnalysisData] = useState();

  useEffect(() => {
    fetch(API_ROOT_URL+"/content.json")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setAnalysisData(data);
    })
    .catch(err=>console.error(err));
  }, [])

  return <>{analysisData&&<AnalysisList analysisData={analysisData} />}</>
}

export default Analysis