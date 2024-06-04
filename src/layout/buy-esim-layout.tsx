"use client";

import { CommonComponent } from "@/components/commonComponent";
import Header from "@/components/header";
import React, { ReactNode } from "react";
import Image from "next/image";
import { sourceImage } from "@/assets/images";
import Footer from "@/components/footer";
import { LANGUAGE } from "../interfaces/enum";
import { useTranslations } from "next-intl";
import SearchLocation from "@/components/commonComponent/search-location";

interface Props {
  locale: LANGUAGE;
  children: ReactNode;
}

const BuyEsimLayout = (props: Props) => {
  const { locale, children } = props;
  const t = useTranslations("selectEsim");
  return (
    <div>
      <Header locale={locale} />
      <div className="mb-[120px]">
        <div className="bg-[#FDF2D4] relative p-4 lg:block lg:p-0  lg:h-[333px]">
          <CommonComponent.Container className="h-full" classNameRoot="h-full">
            <div className="lg:gap-x-10  h-full flex items-center">
              <div className="w-full lg:w-auto relative z-[2] ">
                <p className="text-60 mb-5 lg:mb-10">{t("chooseDataPlan")}</p>
                <SearchLocation />
              </div>
              <div className=" hidden  z-[1] absolute top-0 right-0 lg:flex  justify-end h-full">
                <Image
                  src={sourceImage.banner.bannerEsim}
                  alt=""
                  className=" w-[80%] xl:w-[90%]   2xl:w-full  h-full"
                />
              </div>
            </div>
          </CommonComponent.Container>
        </div>
        <div className="">
          <CommonComponent.Container className="!p-0">
            <div className="" style={{ borderBottom: "1px solid #DEDEDE" }}>
              {/* <CommonComponent.CommonTabs onChangeTab={onChangeTab} value={location.pathname} listTabs={listTabs} /> */}
            </div>
          </CommonComponent.Container>
          {/* {children} */}
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default BuyEsimLayout;
