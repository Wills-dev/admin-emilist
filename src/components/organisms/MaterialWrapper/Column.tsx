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
  columnHelper.accessor("name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.getValue("name");
      return title || "N/A";
    },
  }),
  columnHelper.accessor("category", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("subCategory", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sub category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("price", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = row.getValue("price");
      const currency = (row?.original as { currency?: string })?.currency;

      return (
        <p className="">
          {currency && getCurrencySign(currency)}
          {price ? numberWithCommas(Number(price)) : "0.00"}
        </p>
      );
    },
  }),
  columnHelper.accessor("discountedPrice", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Discounted Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const discountedPrice = row.getValue("discountedPrice");
      const currency = (row?.original as { currency?: string })?.currency;

      return (
        <p className="">
          {currency && getCurrencySign(currency)}
          {discountedPrice ? numberWithCommas(Number(discountedPrice)) : "0.00"}
        </p>
      );
    },
  }),
  columnHelper.accessor("availableQuantity", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Availability Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const availableQuantity = row.getValue("availableQuantity");

      return (
        <p className="">
          {availableQuantity ? numberWithCommas(Number(availableQuantity)) : 0}
        </p>
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<ProductType, unknown>) => {
      const material = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={ROUTES?.MATERIALS_INFO(material?._id)}>
                View info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={ROUTES?.USER_INFO(material?.userId?._id)}>
                View owner
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
