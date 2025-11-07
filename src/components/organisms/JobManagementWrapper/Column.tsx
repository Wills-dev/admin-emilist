import Link from "next/link";

import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { convertDateFormat } from "@/lib/helpers";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { ROUTES } from "@/lib/helpers/routes";
import { JobTableInfo } from "@/features/jobs/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

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
  columnHelper.accessor("title", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.getValue("title");
      return title || "N/A";
    },
  }),
  columnHelper.accessor("type", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("userName", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),

  columnHelper.accessor("status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const statusStyles: Record<string, string> = {
        pending: "text-yellow-400 bg-yellow-50",
        active: "text-blue-400 bg-blue-50",
        completed: "text-green-400 bg-green-50",
      };

      return (
        <div
          className={`rounded-full px-3 py-1 text-center w-32 ${
            statusStyles[status] || "text-red-400 bg-red-50"
          }`}
        >
          {status}
        </div>
      );
    },
  }),
  {
    id: "actions",
    cell: ({ row }: CellContext<JobTableInfo, unknown>) => {
      const job = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={ROUTES?.JOB_INFO(job?.jobId)}>View info</Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
