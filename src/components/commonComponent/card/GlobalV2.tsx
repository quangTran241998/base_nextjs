import { sourceImage } from "@/assets/images";
import BaseRoute from "@/consts/baseRoute";
import { getLocale } from "@/helpers/common";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GlobalCard = () => {
  const router = useRouter();
  const locale = getLocale();

  return (
    <div
      className="flex items-center justify-between p-[18px] bg-white rounded-[12px] mb-2 relative h-[66px]"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      onClick={() => {
        router.push(
          `/${locale}${
            BaseRoute.Global
          }?location=${3}&id=${0}&locationType=${3}`
        );
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4"
        style={{ zIndex: 1 }}
      >
        <div className="flex ">
          <div className=" mr-3 flex">
            <Image
              src={sourceImage.card.cardGlobalCardV2}
              alt=""
              className="w-[49px] mr-2"
            />
            <div className="text-title">{"Discover"}</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={8}
          height={15}
          fill="none"
        >
          <path
            fill="#9B9B9B"
            fillRule="evenodd"
            d="M.293 1.056a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l5.293-5.293L.293 2.47a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <Image
        src={sourceImage.card.bgGlobalCardV2}
        alt=""
        className="absolute w-full h-full left-0 rounded-[12px]"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};
export default GlobalCard;
