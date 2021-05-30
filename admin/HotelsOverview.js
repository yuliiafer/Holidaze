import { useState, useEffect } from "react";
import { BASE_URL, API_HEADER } from "utils/constants";
import Hotel from "pages/hotels/[slug]";

const HotelsOwerview = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const url = BASE_URL + "establishments";
    const options = { API_HEADER };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHotels(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <Hotel link={`/admin/hotels/edit/${hotel.id}`} {...hotel} />
      ))}
    </div>
  );
};
export default HotelsOwerview;
