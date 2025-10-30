import { ArrowUpDown } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { convertDateFormat } from "@/lib/helpers";
import { UserAvailability } from "../../types";

const columnHelper = createColumnHelper();

export const Column = [
  columnHelper.accessor("createdAt", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: Date = row.getValue("createdAt");
      const formatted = date ? convertDateFormat(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),
  columnHelper.accessor("fullName", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("phoneNumber", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("typeOfExpert", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type of Expert
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("details", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Details
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("availability", {
    header: () => {
      return <Button variant="ghost">User availability</Button>;
    },
    cell: ({ row }) => {
      const userAvaliability: UserAvailability[] = row.getValue("availability");

      return (
        <>
          {userAvaliability && userAvaliability.length > 0 ? (
            <div className="flex flex-col gap-1">
              {userAvaliability?.map((availability: UserAvailability) => (
                <p
                  className="flex item-center whitespace-nowrap"
                  key={availability._id}
                >
                  {availability?.date && convertDateFormat(availability?.date)}
                  {availability.time}
                </p>
              ))}
            </div>
          ) : (
            "N/A"
          )}
        </>
      );
    },
  }),

  //   columnHelper.accessor("status", {
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Status
  //           <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       );
  //     },
  //     cell: ({ row }) => {
  //       const status = row.getValue("status") as string;
  //       const statusStyles: Record<string, string> = {
  //         Active: "text-green-400 bg-green-50",
  //         Suspended: "text-red-400 bg-red-50",
  //       };

  //       return (
  //         <div
  //           className={`rounded-full px-3 py-1 text-center w-32 ${
  //             statusStyles[status] || "text-yellow-400 bg-yellow-50"
  //           }`}
  //         >
  //           {status}
  //         </div>
  //       );
  //     },
  //   }),
  //   {
  //     id: "actions",
  //     cell: ({ row }: CellContext<PrivateExpertTableType, unknown>) => {
  //       const user = row.original;

  //       return (
  //         <ColumnActionDropdown>
  //           <button onClick={() => {}} className="text-green-500 text-sm">
  //             Connfirm
  //           </button>
  //         </ColumnActionDropdown>
  //       );
  //     },
  //     enableSorting: false,
  //     enableHiding: false,
  //   },
];
