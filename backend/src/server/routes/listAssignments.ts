import type { Response, Request } from "express"
import type { Server } from "../Server"

export default async ( server:Server, req:Request, res:Response ) => {
    let data = await server.__app.database.listAssignments();

    res.status(200);
    res.json({
        assignments: (data || []).map(a => {
            return {
                id: a.id,
                tasks: a.exercises.map(e => {
                    return {
                        id: e.id,
                        label: e.label,
                        description: e.description,

                        completed: e.completed || false,
                        completedAt: Number(e.completedAt || -1)
                    }
                }),

                text: a.text,
                
                important: a.important || false,
                subjectID: a.subjectID,

                assignedAt: Number(a.assignedAt),
                dueAt:      Number(a.dueAt || 0),

                taskDetails: generateTaskDetails(a.exercises)
            }
        })
    });
}

function generateTaskDetails(t) {
    let completed = 0;
    let total = t.length;

    for(var ex of t) {
        if(ex.completed === true) completed++
    }

    return {
        completed,
        total,
        percent: Math.round((completed/total) * 100) / 100
    }
}