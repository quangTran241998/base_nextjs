import BaseRoute from "@/consts/baseRoute";
import { getLocale } from "@/helpers/common";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  id: number;
  locationType: number;
  onClick?: (
    location: string,
    id: number | string,
    locationType: number
  ) => void;
}

const LocationItem = (props: Props) => {
  const router = useRouter();
  const { title, image, id, locationType, onClick } = props;
  const locale = getLocale();

  return (
    <div
      key={title}
      className="flex items-center justify-between p-[18px] bg-white rounded-[12px] mb-2 cursor-pointer"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      onClick={() => {
        if (onClick) {
          onClick(title, id, locationType);
        } else {
          router.push(
            `/${locale}${BaseRoute.ListPackage}?locationType=${locationType}&id=${id}&name=${title}`
          );
        }
      }}
    >
      <div className="flex items-center">
        <div className=" mr-3">
          <Image src={image} alt="" className="w-[41px]" />
        </div>
        <div className="text-title">{title ?? "viet nam"}</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={15}
        fill="none"
        style={{ minWidth: "10px", marginLeft: "4px" }}
      >
        <path
          fill="#9B9B9B"
          fillRule="evenodd"
          d="M.293 1.056a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l5.293-5.293L.293 2.47a1 1 0 0 1 0-1.414Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default LocationItem;
