import { useState, useEffect } from "react";
import { BASE_URL, API_HEADER } from "utils/constants";
import Search from "../search/Search";
import Questions from "./components/Questions";

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("loading", loading);

  useEffect(() => {
    const establishmentURL = BASE_URL + "establishments";
    const options = { API_HEADER };
    fetch(establishmentURL, options)
      .then((response) => response.json())
      .then((json) => {
        setAccommodations(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Search accommodations={accommodations} />
      <Questions />
    </>
  );
};

export default Home;
