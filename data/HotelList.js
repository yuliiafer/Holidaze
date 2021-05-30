import Link from "next/link";
import { getStrapiMedia } from "utils/media";

const hotelList = ({ hotels }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {hotels.map((_hotel) => (
        <div
          key={_hotel.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/hotels/${_hotel.slug}`}>
            <a>
              <div className="rounded-t-lg bg-white pt-2 pb-2">
                <img
                  className="crop mx-auto"
                  src={getStrapiMedia(_hotel.image.formats.thumbnail.url)}
                  alt={_hotel.name}
                />
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {_hotel.name} sticker
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_hotel.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default hotelList;
