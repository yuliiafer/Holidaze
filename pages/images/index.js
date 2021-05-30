import axios from "axios";
import ImageItem from "components/image/ImageItem";
import { BASE_URL, IMAGE_PATH } from "utils/constants";

const Gallery = ({images}) => {
    console.log(props);
    function getStrapiMedia(media) {
      const imageUrl = media.url.startsWith("/")
        ? getStrapiURL(media.url)
        : media.url;
      return imageUrl;
    }
  return (
    <>
  

    {images.map((image) => (
   
   
         // <img key={image.id} src={image.images_hotels.map(({url}) => url).join([])} alt={image.id} />
  
       <img src={BASE_URL + IMAGE_PATH + image.images_hotels.url}  alt="" />
 
    ))}
     
           

    </>
  );
};

export default Gallery;

export async function getServerSideProps() {

    const res = await fetch(`${BASE_URL}${IMAGE_PATH}`);
  const data = await res.json()
  console.log(data);



  return {
    props: { images: data },
   
  };
}
