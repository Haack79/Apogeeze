import Link from "next/link"
import { Event, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Event[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
  if (!res.ok) {
    throw new Error("failed to get all events")
  }
  const data: Event[] = await res.json()
  return data;
}

export default async function Page() {
  const data = await getData()
  // console.log(JSON.stringify(data))
  return (
    <div className="h-3/4 container mx-auto py-10 flex-col" suppressHydrationWarning>
      <div className="flex justify-center items-center mb-4">
        <Link className="p-3 bg-blue-600 rounded-xl hover:bg-blue-400 text-white" href="/new-event">Create Event</Link>
      </div>
      <p className="text-blue-600 text-semibold" suppressHydrationWarning>Click on a row to edit and a column header to sort.</p>
      <DataTable columns={columns} initialData={data} />
    </div>
  )
}
