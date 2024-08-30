import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import app from './app';
import { initializeEvents } from './api/v1/controllers/events';

const server = http.createServer(app);
const wsServer = new WebSocketServer({ server });

const PORT = 5003;
const connections = new Set<WebSocket>();
console.log('Calling event initilizer')
initializeEvents()
wsServer.on('connection', (connection) => {
    connections.add(connection);

    console.log('New client connected.');

    connection.on('message', (message) => {
        console.log('Received message:', message.toString());
        // need to update
    });

    connection.on('close', () => {
        connections.delete(connection);
        console.log('Client disconnected.');
    });
});

server.listen(PORT, () => {
    console.log(`Server and WebSocket server are listening on ${PORT}`);
});

// broadcast event
export const broadcast = (message: string) => {
    connections.forEach((connection) => {
        if (connection.readyState === WebSocket.OPEN) {
            connection.send(message);
        }
    });
};

