"use client"

import { ColumnDef } from "@tanstack/react-table"
import EventsChart from "@/components/EventsChart"
import { ReactNode } from "react";

export type Event = {
    id: number;
    name: string;
    price: number;
    date: ReactNode; 
    chart?: {
      time: number;
      ampm: "AM" | "PM";
      price: number;
    }[];
  };
  
  export const columns: ColumnDef<Event>[] = [
    {
      accessorKey: "name",
      header: "Event Name",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
      enableSorting: true
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ getValue }) => {
        const dateValue = getValue<string | Date>()
        const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
        
        return date instanceof Date && !isNaN(date.getTime()) ? date.toLocaleDateString() : "Invalid Date"
      },
      enableSorting: true
    },
    {
      accessorKey: "chart",
      header: "Chart Data",
      cell: ({ getValue }) => {
        const chart = getValue<Event['chart']>();
        if (chart && chart.length > 0) {
          return <EventsChart data={chart}/>
        }
        return "No data";
      },
    },
  ];