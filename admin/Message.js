import { useEffect, useState } from "react";
import { BASE_URL, API_HEADER } from "utils/constants";

const Message = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const url = BASE_URL + "contacts";
      const data = await (await fetch(url, { API_HEADER })).json();
      console.log("data", data);
      setMessages(data);
    };
    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <div style={{ flex: 2 }}>
              <p>{message.name}</p>
            </div>
            <div style={{ flex: 6 }}>
              <p>"{message.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Message;
