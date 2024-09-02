import Link from "next/link";
import { Event, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Event[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  
  if (!backendUrl) {
    throw new Error("Backend URL is not defined");
  }
  const res = await fetch(backendUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data: Event[] = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="h-3/4 container mx-auto py-10 flex-col" suppressHydrationWarning>
      <div className="flex justify-center items-center mb-4">
        <Link className="p-3 bg-blue-600 rounded-xl hover:bg-blue-400 text-white" href="/new-event">
          Create Event
        </Link>
      </div>
      <p className="text-blue-600 text-semibold" suppressHydrationWarning>
        Click on a row to edit and a column header to sort.
      </p>
      <DataTable columns={columns} initialData={data} />
    </div>
  );
}
