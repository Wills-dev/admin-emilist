import Link from "next/link";

import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { convertDateFormat } from "@/lib/helpers";
import { ROUTES } from "@/lib/helpers/routes";
import { ProductType } from "@/features/materials/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

const columnHelper = createColumnHelper();

interface UserType {
  fullName: string;
  userName: string;
  email: string;
  _id: string;
}

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
  columnHelper.accessor("_id", {
    header: () => {
      return <div>Verification ID</div>;
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
      const status: string = row.getValue("status");
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("paymentStatus", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Payment status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const paymentStatus: string = row.getValue("paymentStatus");
      return <StatusBubble status={paymentStatus} />;
    },
  }),
  columnHelper.accessor("userId.fullname", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User&apos;s Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const userId = row.getValue("userId") as UserType | undefined;
      const displayName = userId?.fullName || userId?.userName || "N/A";

      return <p className="capitalize">{displayName}</p>;
    },
  }),
  columnHelper.accessor("userId", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User&apos;s Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const userId = row.getValue("userId") as UserType | undefined;
      const displayName = userId?.email || "N/A";

      return <p className="capitalize">{displayName}</p>;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<ProductType, unknown>) => {
      const userId = row.getValue("userId") as UserType;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={ROUTES?.USER_INFO(userId?._id)}>View user info</Link>
            </DropdownMenuItem>
          </ColumnActionDropdown>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
