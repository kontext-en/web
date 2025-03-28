import { Container } from "react-bootstrap";
import API_ROUTE_DATA from "../constants";
import { useEffect, useState } from "react";
import PeopleList from "../components/peopleList/PeopleList";


function PeoplePage({}) {

  const [peopleData, setPeopleData] = useState();

  useEffect(() => {
    fetch(API_ROUTE_DATA.url+API_ROUTE_DATA.routes.people.url+"directory.json"
    )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setPeopleData(json);
    })
    .catch(console.error);
  }, [])

  return <Container>
    {peopleData&&<PeopleList {...peopleData}/>}
  </Container>
}

export default PeoplePage