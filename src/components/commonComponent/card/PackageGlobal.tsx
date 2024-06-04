import { sourcesImage } from "@/assets/images";
import BaseRoute from "@/consts/baseRoute";
import PricePackage from "@/pages/Components/Children/PricePackage";
import { Package } from "@/services/ListPackage";
import { useNavigate } from "react-router-dom";
import { CommonStyles } from "..";
import { sourcesIcons } from "../../IconsSvg/index";

import CoverageRange from "@/pages/Components/Children/CoverageRange";
import { useTranslation } from "react-i18next";

interface Props {
  item: Package;
  locationType: number;
}

const PackageGlobal = (props: Props) => {
  const { t } = useTranslation();
  const { item } = props;
  const { packageName, title, data, day, coverageRange, pricePromotion, packageId, price, currency } = item;
  const navigate = useNavigate();

  return (
    <div
      key={item.title}
      className="rounded-[12px] pb-4 mb-3 "
      style={{
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 1px 6px -1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div className="rounded-[12px] h-[81px] relative">
        <div className="px-4 absolute z-[1] top-[50%]" style={{ transform: "translate(0,-50%)" }}>
          <CommonStyles.Text
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              textTransform: "uppercase",
              lineHeight: "21px",
            }}
          >
            {packageName}
          </CommonStyles.Text>
          <CommonStyles.Text sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "28px" }}>{title}</CommonStyles.Text>
        </div>
        <img src={sourcesImage.card.bgGlobalCard} alt="" className=" absolute w-full h-full top-0 left-0" />
        <img src={sourcesImage.card.globalCard} alt="" className=" absolute w-full h-full top-0 right-0" />
      </div>
      <div className="px-4 pt-4 flex justify-between items-end">
        <div className="">
          <div className="flex items-center mb-[10px] gap-2">
            <sourcesIcons.Price />
            <PricePackage {...{ currency, pricePromotion, price, color: true }} />
          </div>
          <div className="flex items-center mb-[10px]">
            <sourcesIcons.DayData />
            <div className="font-bold ml-2">{`${data}/ ${day} ${t("date")}`}</div>
          </div>

          <div className="flex gap-2 items-center">
            <sourcesIcons.Nation />
            <CoverageRange coverageRange={coverageRange || []} />
          </div>
        </div>
        <div className="">
          <CommonStyles.Button
            sx={{
              background: "linear-gradient(90deg, #F9A51A 0%, #FD0 100%)",
              minWidth: "121px",
            }}
            onClick={() => {
              navigate(`${BaseRoute.InfoOrder}?id=${packageId}`);
            }}
          >
            {t("buyNow")}
          </CommonStyles.Button>
        </div>
      </div>
    </div>
  );
};

export default PackageGlobal;
