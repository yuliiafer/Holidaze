import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, API_HEADER, DELETE } from "utils/constants";
import { VscClose } from "react-icons/vsc";
import "react-confirm-alert/src/react-confirm-alert.css";

const DeleteHotel = (props) => {
  const router = useRouter();

  function checkDelete() {
    confirmAlert({
      title: "Delete hotel?",
      buttons: [
        {
          label: "yes",
          onClick: () => deleteHotel(),
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function deleteHotel() {
    const url = BASE_URL + "establishments/" + props.id;
    const options = { API_HEADER, method: DELETE };
    await fetch(url, options);
    router.push("/admin/hotels");
  }

  return (
    <button onClick={checkDelete} type="button">
      <VscClose /> Delete
    </button>
  );
}

export default DeleteHotel;
