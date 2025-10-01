// serverConfig.js
// Central config for backend URLs

const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
const wsUrl = serverUrl.replace(/^http/, "ws");

export { serverUrl, wsUrl };
