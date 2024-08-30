import express, { Router } from 'express'
import { deleteEventById, editEventById, getAllEvents, getEventById , createNewEvent} from '../controllers/events'

const router: Router = express.Router()

router.get('/', getAllEvents)
router.get('/:eventId', getEventById)
router.patch('/:eventId', editEventById)
router.delete('/:eventId', deleteEventById)
router.post('/', createNewEvent)

export {router as eventRoutes };
