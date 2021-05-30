import axios from "axios";
import { BASE_URL, IMAGE_PATH } from "utils/constants";

const ImageId = ({ image }) => {

  return (
    <>

      <p>{image.id}</p>
       
          <img
            src={image.images_hotels.map(({url}) => url).join()}
            alt={image.id}
          />


    </>
  );
};

export default ImageId;

export const getStaticPaths = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${IMAGE_PATH}`);
    console.log(response.data);
    const images = response.data;
    const paths = images.map((image) => ({
      params: { id: image.id },
    }));

    return {
      paths: paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async ({ params: { id } }) => {
  const url = `${BASE_URL}${IMAGE_PATH}/?id=${id}`;
  let image = null;
  try {
    const response = await axios.get(url);
    image = response.data.images;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      image: image,
    }
  };
};