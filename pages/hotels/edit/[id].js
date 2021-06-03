import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BASE_URL, HOTELS_PATH } from "utils/constants";
import styles from "styles/Home.module.scss";
import { FaImage } from "react-icons/fa";
import Modal from "components/elements/Modal";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ImageUpload from "components/ImageUpload";

export default function EditHotel({ hotel , token }) {
  const [values, setValues] = useState({
    name: hotel.name,
    description: hotel.description,
    price: hotel.price,
    adress: hotel.adress,
  });
  const [imgPreview, setImgPreview] = useState(
    hotel.image ? hotel.image.url : null
  );
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    const res = await fetch(`${BASE_URL}${HOTELS_PATH}${hotel.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('You are not allow to do that')
        return
      }
      toast.error("Something Went Wrong");
    } else {
      const hotel = await res.json();
      router.push(`/hotels/${hotel.slug}`);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const imageUploaded = async () => {
    const res = await fetch(`${BASE_URL}/hotels/${hotel.id}`);
    const data = await res.json();
    setImgPreview(data.image.url);
    setShowModal(false);
  };
  return (
    <>
      <Link href="/hotels">Go Back</Link>
      <h1>Edit Hotel</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Hotel Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Hotel Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={values.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="adress">Adress</label>
            <input
              type="text"
              name="adress"
              id="adress"
              value={values.adress}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input type="submit" value="Edit Hotel" className="btn" />
      </form>
      <h3>Hotel Image</h3>
      {imgPreview ? (
        <img src={imgPreview} alt="added image" />
      ) : (
        <div>No image uploaded</div>
      )}
      <div>
        <buttom className="btn" onClick={() => setShowModal(true)}>
          <FaImage />
          Set Image
        </buttom>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload hotelId={hotel.id} imageUploaded={imageUploaded} />
      </Modal>
    </>
  );
}
export async function getServerSideProps({ params: { id }, req }) {
  const res = await fetch(`${BASE_URL}${HOTELS_PATH}/${id}`);
  const hotel = await res.json();
  console.log(req.headers.cookie);
  return {
    props: {
      hotel, token
    },
  };
}
