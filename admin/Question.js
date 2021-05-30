import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BASE_URL, API_HEADER } from "utils/constants"
import { VscClose } from "react-icons/vsc";

const Info = () => {
  const [enquiries, setEnquiries] = useState([])
  const [establishments, setEstablishments] = useState([])
  useEffect(() => {
    const fetchEstablishments = async () => {
      const url = BASE_URL + "establishments"
      const data = await (await fetch(url, { API_HEADER })).json()
      setEstablishments(data)
    }
    const fetchEnquiries = async () => {
      const url = BASE_URL + "enquiries"
      const data = await (await fetch(url, { API_HEADER })).json()
      setEnquiries(data)
    }
    fetchEnquiries()
    fetchEstablishments()
  }, [])

  const deleteInfo = async (id) => {
    const url = BASE_URL + `enquiries/${id}`
    await fetch(url, {
      method: DELETE,
      API_HEADER,
    })
    const updatedEnquiries = enquiries.filter(({ id: eId }) => eId !== id)
    setEnquiries(updatedEnquiries)
  }

  const getEstablishment = (id) =>
    establishments.find(({ id: eId }) => eId === id)?.name || id

  return (
    <div>
      <h1>Detail Information</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th >Email</th>
              <th>Establishment</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(({ id, name, email, establishmentId, checkIn, checkOut }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                {establishmentId !== getEstablishment(establishmentId) ? (
                  <Link to={`/hotels/${hotel.slug}`}>
                    <td>
                      {getEstablishment(establishmentId)}
                    </td>
                  </Link>
                ) : (
                  <td>{getEstablishment(establishmentId)}</td>
                )}
                <td>{new Date(checkIn).toLocaleDateString()}</td>
                <td>{new Date(checkOut).toLocaleDateString()}</td>
                <td>
                  <button className="" onClick={() => deleteInfo(id)}>
                    <VscClose />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Info