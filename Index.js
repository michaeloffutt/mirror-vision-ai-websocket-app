const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('New client connected');
  
  ws.on('message', message => {
    console.log('Received:', message);
    // Here you can handle message, e.g., communicate with your AI backend.
    ws.send('Hello, client');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server started on ws://localhost:8080');
