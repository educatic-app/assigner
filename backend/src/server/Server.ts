import express      from "express";
import clc          from "cli-color";
import cors         from "cors";
import bodyParser   from "body-parser";

import addAssignmentRoute   from "./routes/addAssignment";
import listAssignmentsRoute from "./routes/listAssignments";

import toggleTaskCompletionRoute from "./routes/toggleTaskCompletion";

import type { App } from "..";

export class Server {

    private app:express.Application;

    constructor(readonly __app:App) {
        this.app = express();
        this.app.use( cors() );
        this.app.use( bodyParser.json() );

        this.setup();
    }

    private setup() {
        this.app.get( "/api/v1/assignment/list", (req:express.Request, res:express.Response) => { listAssignmentsRoute(this, req, res); } )
        this.app.post( "/api/v1/assignment/add", (req:express.Request, res:express.Response) => { addAssignmentRoute(this, req, res); } )

        this.app.post( "/api/v1/task/toggle", (req:express.Request, res:express.Response) => { toggleTaskCompletionRoute(this, req, res); } )

        this.app.listen(5000, () => {
            console.log( clc.green("Server is running!") );
        });
    }

}