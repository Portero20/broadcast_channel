const channel = new BroadcastChannel('chatChannel');

document.getElementById('sendMessage').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    channel.postMessage({ sender: 'Ventana 2', message });
    document.getElementById('messageInput').value = '';
});

channel.onmessage = (event) => {
    const messageLog = document.getElementById('chatLog');
    messageLog.innerHTML += `<p><strong>${event.data.sender}:</strong> ${event.data.message}</p>`;
};