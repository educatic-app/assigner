import {
    HomeworkExercise,
    PrismaClient
} from "@prisma/client";

export class DatabaseClient {

    private client:PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    public async createAssignment( exercises: Array<HomeworkExercise>, subjectID: string, text?: string, important: boolean = false, dueAt?: number ) {
        await this.client.homeworkAssignment.create({
            data: {
                exercises: {
                    create: exercises
                },
                subjectID,

                text,
                important,

                assignedAt: Date.now(),
                dueAt: dueAt
            }
        });
    }

    public async listAssignments( limit: number=50 ) {
        return await this.client.homeworkAssignment.findMany({
            orderBy: {
                assignedAt: "desc"
            },
            take: limit,

            include: {
                exercises: {
                    
                }
            }
        })
    }

    public async toggleTaskCompletion( exerciseID: string ) {
        let completedOld = await this.getTaskCompletion( exerciseID )

        await this.client.homeworkExercise.update({
            where: {
                id: exerciseID
            },
            data: {
                completed: !completedOld,
                completedAt: completedOld ? 0 : Date.now()
            }
        });
    }

    public async getTaskCompletion( exerciseID: string ): Promise<boolean> {
        return (await this.client.homeworkExercise.findUnique({
            where: {
                id: exerciseID
            },
            select: {
                completed: true
            }
        }))?.completed || false;
    }

}