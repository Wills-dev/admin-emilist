import { Review } from "@/lib/types";

const MaterialRating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="sm:px-10 px-4 pb-6">
      <h6 className="font-medium"> Reviews</h6>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default MaterialRating;
