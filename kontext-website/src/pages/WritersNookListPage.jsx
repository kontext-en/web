import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import API_ROUTE_DATA from "../constants"
import MemoList from "../components/memoList/memoList"

function WritersNookListPage({}) {

  const [writersNookData, setWritersNookData] = useState();

  useEffect(() => {
    fetch(API_ROUTE_DATA.url+API_ROUTE_DATA.routes.writersNook.url+"directory.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setWritersNookData(json);
    })
    .catch(console.error);
  }, [])

  return <Container>
    {writersNookData&&<MemoList memoData={writersNookData?.items} tags={writersNookData?.tags} />}
  </Container>
}

export default WritersNookListPage