import Image from "next/image";

export interface StarIconProps {
  filled: boolean;
  size?: number;
  className?: string;
}

const StarIcon = ({ filled, size = 16, className }: StarIconProps) => (
  <Image
    src={filled ? "/assets/icons/star-fill.svg" : "/assets/icons/star.svg"}
    alt="rate"
    width={size}
    height={size}
    className={`object-contain ${className}`}
  />
);

export default StarIcon;
