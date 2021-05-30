import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { BASE_URL, headers, PATCH } from "../../constants/api"
import DeleteHotel from "./DeleteHotel"

const Edit = () => {
  const defaultState = {
    name: "",
    email: "",
  }

  const history = useHistory()
  const { register, handleSubmit } = useForm()
  const [hotel, setHotel] = useState(defaultState)

  let { id } = useParams()

  useEffect(() => {
    const fetchUrl = BASE_URL + "establishments/" + id
    const options = { headers }

    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error))
  }, [id])

  async function onSubmit(data) {
    const fetchUrl = BASE_URL + "establishments/" + id

    const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) }
    await fetch(fetchUrl, updateOptions)
    history.push("/admin/hotels")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit Establishment</h1>
        <div>
          <label>Name</label>
          <input
            ref={register}
            defaultValue={hotel.name}
            name="name"
            type="text"
            placeholder="Enter a Hotel"
          ></input>
        </div>
        <div>
          <label>Image</label>
          <input
            ref={register}
            defaultValue={hotel.image}
            name="image"
            type="text"
            placeholder="URL of the image"
          ></input>
        </div>
        <div>
          <label>Contact</label>
          <input
            ref={register}
            defaultValue={hotel.email}
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
              defaultValue={hotel.price}
              name="price"
              type="text"
              placeholder="Price per night"
            ></input>
          </div>
          <div>
            <label>Max Guests</label>
            <input
              ref={register}
              defaultValue={hotel.maxGuests}
              name="maxGuests"
              type="text"
              placeholder="Maximum Guests"
            ></input>
          </div>
        </div>
        <button
          type="submit"
        >
          Save
        </button>
        <DeleteHotel id={id} />
      </form>
    </>
  )
}

export default Edit