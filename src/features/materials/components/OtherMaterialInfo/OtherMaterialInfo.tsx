import PaymentInfo from "@/components/molecules/PaymentInfo/PaymentInfo";

import { ProductType } from "../../types";
import { getCurrencySign, numberWithCommas } from "@/lib/helpers";

const OtherMaterialInfo = ({ materialInfo }: { materialInfo: ProductType }) => {
  const currency = materialInfo?.currency
    ? getCurrencySign(materialInfo?.currency)
    : "";
  const price = materialInfo?.price
    ? `${currency}${numberWithCommas(materialInfo?.price)}`
    : `${currency}0.00`;
  const discountedPrice = materialInfo?.discountedPrice
    ? `${currency}${numberWithCommas(materialInfo?.discountedPrice)}`
    : `${currency}0.00`;

  const availableQuantity = materialInfo?.availableQuantity
    ? numberWithCommas(materialInfo?.availableQuantity)
    : 0;

  return (
    <div className="sm:px-10 px-4 border-b py-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PaymentInfo
          title="Brand:"
          value={materialInfo?.brand}
          fontWeight="font-semibold"
        />
        <PaymentInfo
          title="Category:"
          value={materialInfo?.category}
          fontWeight="font-semibold"
        />
        <PaymentInfo
          title="Sub Category:"
          value={materialInfo?.subCategory}
          fontWeight="font-semibold"
        />
        <PaymentInfo
          title="Available Quantity:"
          value={availableQuantity}
          fontWeight="font-semibold"
        />
        <PaymentInfo title="Price:" value={price} fontWeight="font-semibold" />
        <PaymentInfo
          title="Discounted Price:"
          value={discountedPrice}
          fontWeight="font-semibold"
        />
      </div>
      <p>{materialInfo?.description}</p>
    </div>
  );
};

export default OtherMaterialInfo;
