export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getHotels() {
  const hotels = await fetchAPI("/hotels");
  return hotels;
}

export async function getHotel(slug) {
  const hotels = await fetchAPI(`/hotels?slug=${slug}`);
  return hotels?.[0];
}
