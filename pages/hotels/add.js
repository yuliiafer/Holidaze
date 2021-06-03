import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BASE_URL, HOTELS_PATH } from "utils/constants";
import styles from "styles/Home.module.scss";
import PageBanner from "components/pageBanners/PageBanner";
import cookie from 'cookie'

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : '')
}
const AddHotel = ({ token }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    adress: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    const res = await fetch(`${BASE_URL}${HOTELS_PATH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Not allow");
        return;
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

  return (
    <>
      <PageBanner />
      <h1>Add Hotel</h1>
      <Link href="/hotels">Go Back</Link>
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
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="url"
              name="image"
              id="image"
              value={values.image}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <input type="submit" value="Add Hotel" className="btn" />
      </form>
    </>
  );
};export default AddHotel;
/*
//export async function getServerSideProps({ req }) {
 // const { token } = parseCookies(req);

 // return {
 //   props: {
      token,
    },
  };
}
*/
