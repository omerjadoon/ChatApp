let socketUrl: string;

if (process.env.NODE_ENV === "production") {
  socketUrl = "wss://chat-app-server-eta-azure.vercel.app/peer";
} else if (process.env.NODE_ENV === "development") {
  socketUrl = "wss://chat-app-server-eta-azure.vercel.app/peer";
} else {
  socketUrl = "wss://chat-app-server-eta-azure.vercel.app/peer";
}

export default socketUrl;
