"use client";
import React from "react";
import { sourcesIcons } from "../IconsSvg/index";
import { useTranslations } from "next-intl";
import BaseRoute from "@/consts/baseRoute";
import { CommonComponent } from "../commonComponent";
import PopoverDemo from "../commonComponent/menu";
import { LANGUAGE } from "@/interfaces/enum";
import LangSelect from "./Lang";

interface Props {
  locale: LANGUAGE;
}

const Header = (props: Props) => {
  const { locale } = props;

  const t = useTranslations("header");

  const pages = [
    // { title: t("home"), link: BaseRoute.Homepage },
    { title: "getEsim", link: BaseRoute.Nations },
    { title: "aboutSkyFi", link: BaseRoute.About },
    { title: "contact", link: BaseRoute.Contact },
  ];

  return (
    <div>
      <CommonComponent.Container>
        <div className=" items-center justify-between grid grid-cols-12 py-[19px]">
          <div className=" col-span-8">
            <div className="flex items-center">
              <div className="">
                <sourcesIcons.Logo />
              </div>
              <div className="flex items-center">
                {pages.map((item) => {
                  return (
                    <p
                      key={item.title}
                      className="text-[18px] font-medium px-10 py-1"
                    >
                      {t(item.title)}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex justify-end">
              <div className="flex items-center mr-10">
                <sourcesIcons.Avatar />
                <p className="ml-2 text-[18px] font-medium">{t("logIn")}</p>
              </div>
              <LangSelect locale={locale} />
            </div>
          </div>
        </div>
      </CommonComponent.Container>
    </div>
  );
};

export default Header;
