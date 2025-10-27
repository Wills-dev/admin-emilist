import { ColumnDef, Table, flexRender } from "@tanstack/react-table";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

interface TableBodyWrapProps<TData = unknown> {
  table: Table<TData>;
  columns: ColumnDef<TData>[];
}

const TableBodyWrap = ({ table, columns }: TableBodyWrapProps) => {
  return (
    <TableBody>
      {table?.getRowModel().rows?.length ? (
        table?.getRowModel().rows.map((row) => (
          <TableRow
            key={row?.id}
            data-state={row.getIsSelected() && "selected"}
            className={row.getIsSelected() ? "bg-blue-50" : ""}
          >
            {row?.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="whitespace-nowrap">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns?.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableBodyWrap;
