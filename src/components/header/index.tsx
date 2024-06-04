"use client";

import BaseRoute from "@/consts/baseRoute";
import { classCommon } from "@/consts/common";
import { getLocale } from "@/helpers/common";
import { LANGUAGE } from "@/interfaces/enum";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sourcesIcons } from "../IconsSvg/index";
import { CommonComponent } from "../commonComponent";
import LangSelect from "./Lang";
import { useEffect, useState } from "react";

interface Props {
  locale: LANGUAGE;
}

const Header = (_props: Props) => {
  const [pathCurrent, setPathCurrent] = useState<string>(location.pathname);
  const locale = getLocale();
  const t = useTranslations("header");
  const pathname = usePathname();

  const pages = [
    { title: "getEsim", link: `/${locale}${BaseRoute.Nations}` },
    { title: "aboutSkyFi", link: `/${locale}${BaseRoute.About}` },
    { title: "contact", link: `/${locale}${BaseRoute.Contact}` },
  ];

  // const isActivePath = useCallback(
  //   (path: string) => {
  //     const arrPath = pathUrl.split("/");
  //     const isPathBuyEsim = arrPath[2] === "buy-esim";
  //     const pathCurrent = path.split("/");
  //     if (isPathBuyEsim) {
  //       return pathCurrent[2] === arrPath[2];
  //     } else {
  //       return pathUrl === path;
  //     }
  //   },
  //   [usePathname]
  // );

  const isActivePath = (path: string) => {
    return pathCurrent === path;
  };

  useEffect(() => {
    setPathCurrent(location.pathname);
    // ...
  }, [pathname]);

  return (
    <header className={`${classCommon.header}`}>
      {/* desktop */}
      <div className="hidden md:block">
        <CommonComponent.Container>
          <div className=" items-center justify-between flex py-[19px]">
            <div className=" w-fit">
              <div className="flex items-center">
                <Link
                  className=" cursor-pointer"
                  href={`/${locale}/${BaseRoute.Homepage}`}
                >
                  <sourcesIcons.Logo />
                </Link>
                <div className="flex items-center">
                  {pages.map((item) => {
                    return (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="text-[18px] font-medium md:px-4 xl:px-10 py-1"
                        style={{
                          fontWeight: isActivePath(item.link) ? 700 : 500,
                        }}
                      >
                        {t(item.title)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-fit">
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
      {/* mobile */}
      <div className="flex justify-between items-center md:hidden px-4 py-3">
        <sourcesIcons.Logo />
        <sourcesIcons.NavBarMobile />
      </div>
    </header>
  );
};

export default Header;
