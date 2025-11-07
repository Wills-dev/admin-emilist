import Link from "next/link";

import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  convertDateFormat,
  getCurrencySign,
  numberWithCommas,
} from "@/lib/helpers";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { ROUTES } from "@/lib/helpers/routes";
import { ProductType } from "@/features/materials/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const columnHelper = createColumnHelper();

interface UserType {
  fullName: string;
  userName: string;
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
      return <div>Transaction ID</div>;
    },
  }),
  columnHelper.accessor("reference", {
    header: () => {
      return <div> Reference</div>;
    },
  }),
  columnHelper.accessor("amount", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("amount");
      const currency = (row?.original as { currency?: string })?.currency;

      return (
        <p className="">
          {currency && getCurrencySign(currency)}
          {amount ? numberWithCommas(Number(amount)) : "0.00"}
        </p>
      );
    },
  }),
  columnHelper.accessor("userId", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sender
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
  columnHelper.accessor("recieverId", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Receiver
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const recieverId = row.getValue("recieverId") as UserType | undefined;
      const displayName = recieverId?.fullName || recieverId?.userName || "N/A";

      return <p className="capitalize">{displayName}</p>;
    },
  }),
  columnHelper.accessor("paymentMethod", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Payment Method
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("adminApproval", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Approved
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("adminApproval");
      return (
        <p className={status ? "text-green-600" : "text-red-600"}>
          {status ? "Yes" : "No"}
        </p>
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
      const status: string = row.getValue("status");
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("description", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<ProductType, unknown>) => {
      const transaction = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={ROUTES?.TRANSACTIONS_INFO(transaction?._id)}>
                View info
              </Link>
            </DropdownMenuItem>
          </ColumnActionDropdown>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
