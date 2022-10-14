import { DatabaseClient } from "./database/Database";
import { Server } from "./server/Server";

export class App {

    readonly server:Server;
    readonly database:DatabaseClient;

    constructor() {
        this.server = new Server(this);
        this.database = new DatabaseClient();
    }

}

const app = new App();