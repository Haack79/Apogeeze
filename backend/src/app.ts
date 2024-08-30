import express, {Express, Request, Response, NextFunction } from 'express'
import { eventRoutes } from './api/v1/routes/events'
import cors from 'cors'

const app: Express = express()
app.use(cors())
app.use(express.json())

app.use('/events', eventRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    const error: Error & { status?: number } = new Error('Not Found')
    error.status = 404;
    next(error)
})
app.use((error: Error & { status?: number }, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
    });
});

export default app;