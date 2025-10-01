import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const register = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    alert(await res.text());
  };

  const login = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) setToken(data.token);
    else alert(data.error);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dark Heresy 2E VTT</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      {token && <p>Logged in! Token: {token}</p>}
    </div>
  );
}

export default App;