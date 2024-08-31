"use client"
import React, { useState, useTransition, Fragment } from "react"
import { useRouter } from "next/navigation"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { eventSchema, EventValues } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createEvent } from "./actions"
import {PopoverContent, Popover, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import LoadingButton from "@/components/LoadingButton"

const CreateEventForm = () => {
    const [error, setError] = useState<string>();
    const [isPending, startTransition] = useTransition()
    const { toast } = useToast()
    const router = useRouter()
    const form = useForm<EventValues>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            name: "",
            price: 0,
            date: new Date()
        }
    })

    const onSubmit = async (values: EventValues) => {
        setError(undefined)
        startTransition(async () => {
            try {
                const result = await createEvent(values)
                toast({
                    description: "Event Created!"
                })
                router.push('/events')
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        })
    }

    return (
        <Fragment>
            <h1 className="flex justify-center items-center p-2 text-bold text-blue-500 text-xl mt-5">Create a New Event</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-3 mx-4" suppressHydrationWarning>
                {error && <p className="text-center text-destructive">{error}</p>}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Event Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                        <Input placeholder="Price" type="price" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Event Date</FormLabel>
                        <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                            <Button
                                variant={"outline"}
                                className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                                )}
                            >
                                {field.value ? (
                                format(field.value, "PPP")
                                ) : (
                                <span>Pick event date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            />
                        </PopoverContent>
                        </Popover>
                        <FormDescription>
                        Event date
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <LoadingButton loading={isPending} type="submit" className="w-full">Create Event</LoadingButton>
                </form>
            </Form>
        </Fragment>
    );
}

export default CreateEventForm;