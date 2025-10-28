import TableNavLink from "@/components/atoms/TableNavLink/TableNavLink";

interface TableNavLinkWrapperProps {
  links: {
    id: string | number;
    title: string;
    link: string;
  }[];
}

const TableNavLinkWrapper = ({ links }: TableNavLinkWrapperProps) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {links?.map((link) => (
        <TableNavLink key={link?.id} link={link?.link} title={link?.title} />
      ))}
    </div>
  );
};

export default TableNavLinkWrapper;
