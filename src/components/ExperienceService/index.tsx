import { dataImage } from "@/mocks/home";
import { CommonComponent } from "../commonComponent/index";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import BaseRoute from "@/consts/baseRoute";
import parse from "html-react-parser";

export default function ExperienceService() {
  const t = useTranslations("home");
  const route = useRouter();

  return (
    <div className=" md:py-[120px] overflow-hidden bg-white">
      <div className="hidden md:block">
        <CommonComponent.Container>
          <div className="bg-[#333333] text-white h-[460px] rounded-xl relative ">
            <h2 className="text-[26px] leading-[48px] md:text-[60px] font-bold z-10 md:leading-[72px] text-left md:pt-20 relative md:pl-20">
              {parse(t("experienceService"))}
            </h2>
            <p className={` text-[24px] leading-[30px] my-4 md:pl-20 `}>
              {parse(t("discoverSkyFi"))}
            </p>
            <div className="pl-20">
              <CommonComponent.Button
                className="min-w-[200px]"
                onClick={() => route.push(BaseRoute.Nations)}
              >
                {t("getNewEsim")}
              </CommonComponent.Button>
            </div>
            <div className="h-full">
              <Image
                className="absolute right-0 bottom-0 top-0 rounded-[16px]"
                src={dataImage.imgHomepage7}
                alt="frame1"
              />
            </div>
          </div>
        </CommonComponent.Container>
      </div>
      <div className="md:hidden bg-[#333333] text-white h-[360px] md:h-[460px] relative ">
        <h2 className="text-[26px] leading-[33.6px] md:text-[60px] font-bold z-10 md:leading-[72px] pt-10 text-center md:text-left md:pt-20 relative md:pl-20">
          {parse(t("experienceService"))}
        </h2>
        <p
          className={`text-[16px] md:text-[24px] leading-[20px] md:leading-[36px] my-[20px] md:pl-20 relative z-10 text-center md:text-left`}
        >
          {parse(t("discoverSkyFi"))}
        </p>
        <div className="flex justify-center md:block md:pl-20 z-10 relative mt-10 md:mt-0">
          <CommonComponent.Button
            style={{
              minWidth: "200px",
            }}
            onClick={() => route.push(BaseRoute.Nations)}
          >
            {t("getNewEsim")}
          </CommonComponent.Button>
        </div>
        <div className="h-full overflow-hidden">
          <Image
            className="absolute right-[-64%] top-[25%] md:right-[-45%] md:bottom-0 md:top-0 md:h-[100%] md:w-[100%]"
            src={dataImage.imgHomepage7}
            alt="frame1"
          />
        </div>
      </div>
    </div>
  );
}
