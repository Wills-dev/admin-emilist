import { ProductType } from "../../types";
import MaterialFile from "../MaterialFile/MaterialFile";
import MaterialHeader from "../MaterialHeader/MaterialHeader";
import MaterialRating from "../MaterialRating/MaterialRating";
import OtherMaterialInfo from "../OtherMaterialInfo/OtherMaterialInfo";

const MaterialInfo = ({ materialInfo }: { materialInfo: ProductType }) => {
  return (
    <div className="col-span-9 max-lg:col-span-12 flex flex-col w-full bg-white rounded-lg py-6">
      <MaterialHeader title={materialInfo?.name} id={materialInfo?._id} />
      <OtherMaterialInfo materialInfo={materialInfo} />
      <MaterialFile files={materialInfo?.images} />
      <MaterialRating reviews={materialInfo?.reviews} />
    </div>
  );
};

export default MaterialInfo;
