import bestOffer from "@/assets/images/package/bestOffer.png";
import packageBestOffer from "@/assets/images/package/packageBestOffer.png";

import { sourcesIcons } from "@/components/IconsSvg";
import { CommonStyles } from "@/components/commonStyles";
import BaseRoute from "@/consts/baseRoute";
import { randomImage } from "@/helpers/common";
import CoverageRangeArea from "@/pages/Components/Children/CoverageRangeArea";
import PricePackage from "@/pages/Components/Children/PricePackage";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PackageItem = (props: any) => {
  const {
    packageId,
    packageName,
    title,
    price,
    pricePromotion,
    currency,
    data,
    day,
    isSeller,

    // voice,
    // sms,
    coverageRange,
    locationType,
  } = props;
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div
      style={{
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 1px 6px -1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.02)",
        position: "relative",
      }}
      className={`${isSeller ? "border-[3px] border-[#ECBD68] " : " "} rounded-2xl cursor-pointer mb-5 lg:mb-0`}
    >
      <div
        style={{
          backgroundImage: `url(${isSeller ? packageBestOffer : randomImage()})`,
        }}
        className="relative bg-cover p-4 rounded-xl"
      >
        {isSeller && <img className="absolute  top-6 right-[-12px] " src={bestOffer} alt="" />}
        <CommonStyles.Text
          style={{
            marginBottom: "0",
            fontSize: "14px",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
          variant="title"
        >
          {packageName}
        </CommonStyles.Text>
        <CommonStyles.Text
          style={{
            marginBottom: "0",
          }}
          variant="text20"
        >
          {title}
        </CommonStyles.Text>
      </div>
      <div className="p-4 flex justify-between items-center" style={{ width: "calc(100% - 121px)" }}>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2  ">
            <sourcesIcons.Price />
            <PricePackage {...{ currency, pricePromotion, price, color: true }} />
          </div>
          <div className="flex gap-2  ">
            <sourcesIcons.Data />
            <CommonStyles.Text
              style={{
                marginBottom: "0",
              }}
              variant="subTitlePage"
            >
              {" "}
              {data}/ {day} {t("date")}
            </CommonStyles.Text>
          </div>
          {(locationType == 2 || locationType == 3) && (
            <div className="flex gap-2 items-center">
              <sourcesIcons.Nation />
              <CoverageRangeArea coverageRange={coverageRange || []} />
            </div>
          )}
        </div>
      </div>
      <CommonStyles.Button
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={() => {
          navigate(`${BaseRoute.InfoOrder}?id=${packageId}`);
        }}
      >
        {t("buyNow")}
      </CommonStyles.Button>
    </div>
  );
};
export default PackageItem;
