import { io } from "socket.io-client";

const URL = "https://blog-app-api-delta.vercel.app/";

const socket = io(URL, {
  autoConnect: false,
});

export { socket };
