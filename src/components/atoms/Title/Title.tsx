import { JSX } from "react";

interface TitleProps {
  tag?: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  className?: string;
  title: string;
}

const Title = ({ tag: Tag = "h2", className, title }: TitleProps) => {
  return <Tag className={className}>{title}</Tag>;
};

export default Title;
