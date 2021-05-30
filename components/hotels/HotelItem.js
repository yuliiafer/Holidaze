import Link from "next/link";

const HotelItem = ({ hotel }) => {
  return (
    <>
      <img
        src={hotel.image ? hotel.image.url : hotel.img_url}
        alt={hotel.name}
      />
      <h2>
        <Link href={`/hotels/${hotel.slug}`}>
          <a>{hotel.name}</a>
        </Link>
      </h2>
      <p className="card-text">
        <b>kr {hotel.price}</b> / night
      </p>
      <Link href={`/hotels/${hotel.slug}`}>
        <button className="btn">View Details</button>
      </Link>
    </>
  );
};

export default HotelItem;
