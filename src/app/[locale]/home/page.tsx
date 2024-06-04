"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { CommonComponent } from "@/components/commonComponent";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";
import { LANGUAGE } from "@/interfaces/enum";
import BaseRoute from "@/consts/baseRoute";
import { device } from "@/consts/common";
import { sourceImage } from "@/assets/images";
import Image from "next/image";
import { dataHomePage } from "@/mocks/home";
import ScrollCardCustom from "./children/scrollCardCustom";
import ExperienceService from "@/components/ExperienceService";

export const isValidHex = (hex: string) =>
  /^([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex);

const Page = ({ params: { locale } }: { params: { locale: LANGUAGE } }) => {
  const t = useTranslations("home");
  const router = useRouter();

  const { isMobile } = device();

  const height = isMobile ? "h-[calc(100vh-76px)]" : "h-[calc(100vh-90px)]";
  const pathCurrent = location.pathname;

  return (
    <>
      <main>
        <section>
          <div
            className={`w-[100%] ${height} relative block md:flex items-center overflow-hidden`}
            style={{
              background:
                "linear-gradient(147deg, #FAE9E4 38.87%, #EEF6FE 65.62%, #F5FFF9 109.46%)",
            }}
          >
            <div className="absolute right-[-53%] top-[22%] md:top-[50%] md:right-0 translate-y-[-50%]">
              <Image
                className="w-[1115px]"
                src={sourceImage.common.globalHomeTop}
                alt="logo skyfi"
              />
            </div>
            <div className="pt-60 px-6 md:px-10 md:pt-0 md:pl-[10%] ">
              <h1
                // dangerouslySetInnerHTML={{ __html: t("stayConnected") }}
                className="hidden md:block text-[26px] leading-[48px] md:text-[70px] text-[#333333] font-bold z-10 md:leading-[72px] relative"
              >
                {parse(t("stayConnected"))}
              </h1>
              <h1 className="md:hidden text-[40px] leading-[48px] md:text-[60px] text-[#333333] font-bold z-10 md:leading-[72px] relative">
                {parse(t("stayConnectedMobi"))}
              </h1>
              <p className="hidden md:block text-[14px] md:text-[24px] text-[#333333] font-medium	z-10 md:leading-[36px] my-[20px] md:my-[40px] relative">
                {parse(t("withSkyFi"))}
              </p>
              <p className="md:hidden text-[18px] md:text-[24px] font-medium text-[#333333]	 z-10 md:leading-[36px] my-[20px] md:my-[40px] relative">
                {parse(t("withSkyFiMobi"))}
              </p>
              <div className="flex flex-col-reverse gap-4 md:flex-row">
                <div>
                  <CommonComponent.Button
                    className="min-w-[228px] border border-[#CC8F14] text-[#CC8F14]"
                    style={{ background: "white" }}
                    onClick={() => {
                      // user ? navigate(BaseRoute.MySim) : navigate(BaseRoute.Login);

                      router.push(`/${locale}/${BaseRoute.MySim}`);
                    }}
                  >
                    {t("myEsim")}
                  </CommonComponent.Button>
                </div>
                <div>
                  <CommonComponent.Button
                    className="min-w-[228px]"
                    onClick={() => {
                      router.push(`/${locale}/${BaseRoute.Nations}`);
                    }}
                  >
                    {t("getNewEsim")}
                  </CommonComponent.Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white pt-[40px] pb-[40px] md:pt-[120px] md:pb-[40px] text-[#333333]">
            <h2 className="text-[26px] mb-[24px] leading-[48px] md:text-[60px] font-bold z-10 md:leading-[72px] text-center md:mb-[60px]">
              {t("whyChooseSkyFi")}
            </h2>
            <CommonComponent.Container>
              <ul className="flex flex-col md:flex-row justify-between gap-8 2xl:gap-[60px] w-full mb-8 md:mb-[80px] ">
                {dataHomePage.map((item, index) => {
                  const bgColor = isValidHex(item.bg)
                    ? `#${item.bg}`
                    : "#FFFFFF";
                  return (
                    <div
                      key={item.id}
                      className={`w-full relative h-[500px] md:h-[600px] rounded-[16px] shadow-xl px-2 max-w-[409px] mx-auto`}
                      style={{ backgroundColor: bgColor }}
                    >
                      <div
                        className={`font-bold text-[22px] md:text-[28px] leading-[30px] md:leading-[34px] text-center mt-10 mb-3 ${
                          index === 1 ? "text-white" : ""
                        }`}
                      >
                        {t(item.title)}
                      </div>
                      <div
                        className={`font-semibold text-[14px] relative z-10 md:text-[20px] leading-[20px] md:leading-[30px] text-center px-4 ld:px-11 ${
                          index === 1 ? "text-white" : ""
                        }`}
                      >
                        {t(item.desc)}
                      </div>
                      <Image
                        className="absolute left-0 right-0  bottom-0 w-full  rounded-br-lg rounded-bl-lg"
                        src={item.img}
                        alt="img item"
                      />
                    </div>
                  );
                })}
              </ul>
            </CommonComponent.Container>
          </div>
        </section>
        <section>
          <ScrollCardCustom />
        </section>
        <section>
          <ExperienceService />
        </section>
      </main>
    </>
  );
};

export default Page;
