import TableNavLink from "@/components/atoms/TableNavLink/TableNavLink";

type LinkItem = {
  id: number;
  link: string;
  title: string;
};

interface TableNavLinkWrapperProps {
  links: LinkItem[];
  activeLink?: string;
  normalLink?: string;
}

const TableNavLinkWrapper = ({
  links,
  activeLink,
  normalLink,
}: TableNavLinkWrapperProps) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {links?.map((link) => (
        <TableNavLink
          key={link?.id}
          link={link?.link}
          title={link?.title}
          normalLink={normalLink}
          activeLink={activeLink}
        />
      ))}
    </div>
  );
};

export default TableNavLinkWrapper;
