// serverConfig.js
// Central config for backend URLs

const serverUrl = import.meta.env.VITE_SERVER_URL || "https://dh2e.onrender.com";
const wsUrl = serverUrl.replace(/^http/, "ws");

export { serverUrl, wsUrl };
