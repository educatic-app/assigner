import type { Response, Request } from "express"
import type { Server } from "../Server"

export default async ( server:Server, req:Request, res:Response ) => {
    if( typeof req.body.taskID !== "string" )
    {
        res.status(400);
        res.json({
            error: "Invalid request body"
        });
        return;
    }

    try {
        await server.__app.database.toggleTaskCompletion( req.body.taskID )
    } catch(err) {
        console.log("error [/api/v1/exercise/toggle] >", err);
    }

    res.status(200);
    res.json({
        status: "ok"
    });
}