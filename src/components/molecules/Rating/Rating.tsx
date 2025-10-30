import StarIcon from "@/components/atoms/StarIcon/StarIcon";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}

const Rating = ({
  rating,
  maxRating = 5,
  size = 20,
  className = "w-5 h-5",
}: RatingProps) => (
  <div className="flex items-center my-1">
    {[...Array(maxRating)].map((_, index) => (
      <StarIcon
        key={index}
        filled={index < rating}
        size={size}
        className={className}
      />
    ))}
  </div>
);

export default Rating;
