import ShowImage from "@/components/molecules/ShowImage/ShowImage";
import { MaterialImages } from "../../types";

const MaterialFile = ({ files }: { files: MaterialImages[] }) => {
  return (
    <div className="sm:px-10 px-4 py-6 flex flex-wrap gap-4">
      {files?.map((file: MaterialImages) => (
        <ShowImage
          key={file?._id}
          alt="business file"
          src={file?.imageUrl}
          extraStyle="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-lg"
        />
      ))}
    </div>
  );
};

export default MaterialFile;
