const socket = new WebSocket('ws://localhost:8080');
const inputElement = document.getElementById('input');
const messagesElement = document.getElementById('messages');

// Listen for messages from the server
socket.onmessage = function(event) {
  const message = event.data;
  const messageElement = document.createElement('div');
  messageElement.textContent = 'Server: ' + message;
  messagesElement.appendChild(messageElement);
};

// Send message to server
function sendMessage() {
  const message = inputElement.value;
  socket.send(message);

  const messageElement = document.createElement('div');
  messageElement.textContent = 'You: ' + message;
  messagesElement.appendChild(messageElement);

  inputElement.value = ''; // Clear the input
}
