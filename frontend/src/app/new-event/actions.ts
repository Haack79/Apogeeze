"use server"

import { EventValues } from "@/lib/validation"

export const createEvent = async (eventData: EventValues) => {
    try {
        const response = await fetch('http://localhost:5003/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData)
        })
        if (!response.ok) {
            const errorInfo = await response.json()
            throw new Error(`There was an issue: ${errorInfo.error}`)
        }
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(`Issue when creating: ${err}`)
        throw err
    }
}