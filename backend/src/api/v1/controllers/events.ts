import { CustomEvent as Event, events as dbEvents } from "../../../db";
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from 'path'
import { Request, Response, NextFunction } from 'express';
import { AMPM } from '../../../db';
import { broadcast } from '../../../server'; // Import the broadcast function

const dataFilePath = join(__dirname, 'events-data.json');
let events: Event[] = [];

export const initializeEvents = () => {
    console.log('Initializing events...')
    console.log('Data file path:', dataFilePath)
    
    try {
        if (!existsSync(dataFilePath)) {
            console.log('events-data.json does not exist. Creating it with data from db.ts')
            events = dbEvents;
            
            if (events.length === 0) {
                console.warn('Warning: No events found in db.ts')
            }
            saveEvents()
            console.log('events-data.json created successfully')
        } else {
            console.log('events-data.json exists. Loading data...')
            const data = readFileSync(dataFilePath, 'utf-8')
            events = JSON.parse(data)
            console.log(`Loaded ${events.length} events from events-data.json`)
        }
    } catch (err) {
        console.error('Error during event initialization:', err)
        console.log('Falling back to events from db.ts')
        events = dbEvents
    }
    
    console.log('Events initialization complete')
};

const saveEvents = () => {
    try {
        console.log('Saving events to event-data.json')
        writeFileSync(dataFilePath, JSON.stringify(events, null, 2));
    } catch (err) {
        console.error('Issue writing to data file: ', err);
    }
};

const getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
    console.log('return events', JSON.stringify(events))
    try {
        console.log('in try ')
         res.status(200).json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

const getEventById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.eventId);
    try {
        const event = events.find(event => id === event.id);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: "Did not receive a valid ID with that event." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

const createNewEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, date } = req.body;
        const parsedPrice = parseFloat(price);
        const eventDate = date ? new Date(date) : new Date();

        const newId = events.length ? Math.max(...events.map(event => event.id)) + 1 : 1; // Unique ID
        const newEvent = {
            id: newId,
            name,
            price: parsedPrice,
            date: eventDate || new Date(),
            chart: [{ time: eventDate.getUTCHours() || new Date().getUTCHours(), ampm: AMPM.AM, price: 280 }]
        };

        events.push(newEvent);
        saveEvents();
        res.status(201).json({ message: "Successfully Created the event" });
        broadcast(JSON.stringify({ type: 'NEW_EVENT', event: newEvent })); // Broadcast new event
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong creating the event.' });
    }
};



const editEventById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.eventId);
    try {
        const event = events.find(event => id === event.id);
        if (event) {
            const newData = req.body;
            Object.assign(event, newData); // May have to modify for nested objects but not modifying any at this time.
            saveEvents()
            res.status(200).json(event);
            broadcast(JSON.stringify({ type: 'UPDATE_EVENT', event })); // Broadcast updated event
        } else {
            res.status(404).json({ message: "Did not receive a valid ID with that event." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

const deleteEventById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.eventId);
    try {
        const eventIndex = events.findIndex(event => event.id === id);
        if (eventIndex !== -1) {
            const deletedEvent = events.splice(eventIndex, 1);
            saveEvents()
            res.status(200).json({ message: "Event deleted successfully", event: deletedEvent[0] });
            broadcast(JSON.stringify({ type: 'DELETE_EVENT', event: deletedEvent[0] })); // Broadcast deleted event
        } else {
            res.status(404).json({ message: "Event not found with the provided ID." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

export {
    getAllEvents,
    createNewEvent,
    getEventById,
    editEventById,
    deleteEventById
};
