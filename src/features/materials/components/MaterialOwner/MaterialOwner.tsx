import UserProfileCard from "@/components/molecules/UserProfileCard/UserProfileCard";
import { MaterialOwnerType } from "../../types";
import { getLevel } from "@/lib/helpers";

const MaterialOwner = ({
  materialOwnner,
}: {
  materialOwnner: MaterialOwnerType;
}) => {
  return (
    <div className="w-full lg:col-span-3 col-span-12 bg-white rounded-lg py-6 sm:px-10 px-4 space-y-6 h-fit">
      <h6 className="font-semibold max-sm:text-sm">Material Owner</h6>
      <UserProfileCard
        profileImage={materialOwnner?.profileImage}
        name={materialOwnner?.fullName || materialOwnner?.userName}
        rating={materialOwnner?.level ? getLevel(materialOwnner?.level) : 0}
        id={materialOwnner?._id}
      />
    </div>
  );
};

export default MaterialOwner;
