import type { Response, Request } from "express"
import type { Server } from "../Server"

export default async ( server:Server, req:Request, res:Response ) => {
    if( typeof req.body.tasks !== "object" ||
        typeof req.body.subjectID !== "string"
    ) {
        res.status(400);
        res.json({
            error: "Invalid request body"
        });
        return;
    }

    await server.__app.database.createAssignment(
        req.body.tasks.map( e => {
            return {
                label: e.label,
                description: e.description,

                completed: e.completed === true || false,
                completedAt: -1
            }
        } ),
        req.body.subjectID,
        req.body.text,
        req.body.important || false,
        req.body.dueAt
    );

    res.status(200);
    res.json({
        status: "ok"
    });
}