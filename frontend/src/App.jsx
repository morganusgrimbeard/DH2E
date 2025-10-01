import React, { useEffect, useState } from "react";
import { serverUrl, wsUrl } from "./serverConfig";

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/api/rooms`)
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.error("API error:", err));
  }, []);

  useEffect(() => {
    const socket = new WebSocket(`${wsUrl}/ws`);
    socket.onmessage = (event) => {
      console.log("WebSocket message:", event.data);
    };
    return () => socket.close();
  }, []);

  return (
    <div>
      <h1>Dark Heresy 2E VTT (Frontend)</h1>
      <h2>Rooms from backend:</h2>
      <ul>
        {rooms.map((room, idx) => (
          <li key={idx}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
