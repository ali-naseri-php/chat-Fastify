import { FastifyInstance } from "fastify";
import { UserService } from "../services/userService";

export class WebSocketController {
    private fastify: FastifyInstance;
    private userService: UserService;

    constructor(fastify: FastifyInstance, userService: UserService) {
        this.fastify = fastify;
        this.userService = userService;

        this.fastify.get("/ws", { websocket: true }, this.handleConnection.bind(this));
    }

    private handleConnection(connection: any, req: any) {
        console.log("🔗 اتصال جدید WebSocket");

        connection.socket.on("message", (message: string | Buffer) => {
            const data = JSON.parse(message.toString());

            if (data.event === "user-login") {
                this.userService.addUser(data._id, connection.socket);
                this.broadcastOnlineUsers();
            }

            if (data.event === "disconnect") {
                this.userService.removeUser(connection.socket);
                this.broadcastOnlineUsers();
            }
        });

        connection.socket.on("close", () => {
            this.userService.removeUser(connection.socket);
            this.broadcastOnlineUsers();
        });
    }

    private broadcastOnlineUsers() {
        const onlineUsers = this.userService.getOnlineUsers();
        this.fastify.websocketServer.clients.forEach((client: WebSocket) => {
            if (client.readyState === 1) {
                client.send(JSON.stringify({ event: "online-users", users: onlineUsers }));
            }
        });
    }
}