import { ROUTES } from "@/lib/helpers/routes";

export const materialsNavLinks = [
  { id: 1, title: "all", value: "" },
  { id: 2, title: "in Stock", value: "inStock" },
  { id: 3, title: "out Of stock", value: "outOfstock" },
];

export const materialBreadcrumb = [
  { label: "Materials", href: ROUTES?.MATERIALS },
  { label: "Material Info" },
];
