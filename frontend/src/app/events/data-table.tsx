"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useWebsocket } from "@/components/WebSocketProvider";
import ShowModal from "@/components/ShowModal";
import EditModal from "@/components/EditModal";
import { updateEvent } from "./actions";

interface EventData {
  id: number,
  name: string,
  price: number,
  date: ReactNode
}

interface DataTableProps<TData extends EventData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  initialData: TData[];
}

export function DataTable<TData extends EventData, TValue>({
  columns,
  initialData,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState<TData[]>(initialData);
  const [sorting, setSorting] = useState<SortingState>([]);
  const { val } = useWebsocket();
  const [selectedRow, setSelectedRow] = useState<TData | null>(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  useEffect(() => {
    if (val) {
      const message = JSON.parse(val);
      switch (message.type) {
        case "NEW_EVENT":
          setData((prevData) => {
            if (!prevData.some(ev => ev.id === message.event.id)) {
              console.log('Adding new event:', message.event);
              return [...prevData, message.event];
            }
            console.log('Event already exists, not adding:', message.event);
            return prevData;
          });
          break;
        case "UPDATE_EVENT":
          setData((prevData) =>
            prevData.map((ev) =>
              ev.id === message.event.id ? message.event : ev
            )
          );
          break;
        case "DELETE_EVENT":
          setData((prevData) =>
            prevData.filter((ev) => ev.id !== message.event.id)
          );
          break;
        default:
          console.log("Unknown message type:", message.type);
      }
    }
  }, [val]);

  const handleRowClick = (row: TData) => {
    console.log('clicked', row)
    setSelectedRow(row);
  }

  const handleSave = async (updatedRow: TData) => {
    try {
      const updatedEvent = await updateEvent(updatedRow.id, updatedRow);
      // The WebSocket broadcast should handle updating all clients
      setSelectedRow(null); // Close the modal
    } catch (error) {
      console.error("Failed to update event:", error);
    }
  }

  return (
    <div className="h-3/4 rounded-md border">
      <Table suppressHydrationWarning>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-xl font-bold bg-gray-200 text-gray-900 cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() ? (header.column.getIsSorted() === "desc" ? " 🔽" : " 🔼"): null}
                </TableHead>
              ))}
              <div className="absolute top-[6px] right-[140px] bg-blue-600 text-white rounded-full p-2 mb-2">
                {data?.length || initialData?.length} Rows
              </div>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => handleRowClick(row.original)}
                className="cursor-pointer hover:bg-gray-100"
              >
                {row.getVisibleCells().map((cell) => {
                  let cellStyle = "";

                  switch (cell.column.id) {
                    case "name":
                      cellStyle = "text-blue-500 w-1/4";
                      break;
                    case "price":
                      cellStyle = "text-green-500 w-1/4";
                      break;
                    case "date":
                      cellStyle = "text-red-500 w-1/4";
                      break;
                    default:
                      cellStyle = "text-black";
                  }

                  return (
                    <TableCell
                      key={cell.id}
                      className={`${
                        cell.column.id === "chart"
                          ? "flex justify-center w-[350px]"
                          : cellStyle
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedRow && (
        <ShowModal
          modal={
            <EditModal
              selectedRow={selectedRow}
              onClose={() => setSelectedRow(null)}
              onSave={handleSave}
            />
          }
        />
      )}
    </div>
  );
}
