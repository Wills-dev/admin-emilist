import { Table, flexRender } from "@tanstack/react-table";

import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TableHeaderProps<TData = unknown> {
  table: Table<TData>;
}

const TableHeaderWrap = ({ table }: TableHeaderProps) => {
  return (
    <TableHeader>
      {table?.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup?.headers?.map((header) => {
            return (
              <TableHead key={header?.id} className="bg-gray-100 dark:bg-black">
                {header?.isPlaceholder
                  ? null
                  : flexRender(
                      header?.column?.columnDef.header,
                      header?.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default TableHeaderWrap;
