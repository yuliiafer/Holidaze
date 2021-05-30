import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import { BASE_URL, API_HEADER } from "utils/constants"

const AddHotel = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  async function onSubmit(data) {
    console.log("data", data)
    const url = BASE_URL + "establishments"
    const options = { API_HEADER, method: "POST", body: JSON.stringify(data) }
    await fetch(url, options)
    router.push("/admin/hotels")
  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <h1 >Add New Establishment</h1>
      <div >
        <label>Name</label>
        <input
          ref={register}
          name="name"
          type="text"
          placeholder="Enter a  Hotel"
        ></input>
      </div>
      <div >
        <label>Image</label>
        <input
          ref={register}
          name="image"
          type="text"
          placeholder="URL of the image"
        ></input>
      </div>
      <div >
        <label>Contact</label>
        <input
          ref={register}
          name="email"
          type="email"
          placeholder="Email"
        ></input>
      </div>
      <div>
        <div>
          <label>Price per night</label>
          <input
            ref={register}
            name="price"
            type="text"
            placeholder="Price per night"
          ></input>
        </div>
        <div>
          <label>Max Guests</label>
          <input
            ref={register}
            name="maxGuests"
            type="text"
            placeholder="Maximum Guests"
          ></input>
        </div>
      </div>
      <button
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default AddHotel