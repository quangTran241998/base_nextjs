"use client";

import BaseRoute from "@/consts/baseRoute";
import { sourcesIcons } from "../IconsSvg/index";
import { device, linkWebView } from "@/consts/common";
import { CommonComponent } from "../commonComponent";
import {
  dataCountryFooter,
  dataSupportClient,
  mocDataTrandingSettingEsim,
} from "@/mocks/common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export enum SupportCustomer {
  aboutSkyFi = "aboutSkyFi",
  contactUs = "contactUs",
  trandingSettingEsim = "trandingSettingEsim",
}

export default function Footer() {
  const { isMobile } = device();
  const t = useTranslations("footer");

  const route = useRouter();

  const handleSupportCustomer = (page: SupportCustomer) => {
    switch (page) {
      case SupportCustomer.aboutSkyFi:
        route.push(BaseRoute.About);
        break;
      case SupportCustomer.contactUs:
        route.push(BaseRoute.Contact);
        break;
      case SupportCustomer.trandingSettingEsim:
        if (isMobile) {
          route.push(BaseRoute.TrandingSettingEsimDeomo);
        } else {
          // PopupService.instance.current.open({
          //   visible: true,
          //   // content: <InstructEsim {...mocDataTrandingSettingEsim} />,
          //   content:<></>,
          //   title: t("trandingSettingEsim"),
          //   styleContent: { width: "700px", padding: "0", overflowY: "scroll" },
          //   classNameSub: "mx-4 mt-4",
          // });
        }
        break;
      default:
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-FAE9E4 EEF6FE to-F5FFF9"
      style={{
        background:
          "linear-gradient(147deg, #FAE9E4 38.87%, #EEF6FE 65.62%, #F5FFF9 109.46%)",
      }}
    >
      <CommonComponent.Container>
        <footer className=" pt-[40px] pb-[20px] md:pt-[60px] md:pb-[40px]">
          <div className="w-full max-w-screen-xl">
            <div className="lg:flex">
              <div className="mb-6 lg:mb-0 lg:max-w-64 lg:mr-20">
                <sourcesIcons.Logo />
                <div className="text-sm text-primary mt-4">
                  {t("skyfiDescription")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 lg:gap-4 xl:gap-5 2xl:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div>
                  <h2 className="text-primary text-md md:text-lg font-bold text-gray-900e">
                    {t("popularCountries")}
                  </h2>
                  <ul className="text-primary flex flex-col text-base">
                    {dataCountryFooter?.map((item) => (
                      <Link
                        href={`${BaseRoute.Nations}?location=${item.country}&id=${item.id}&locationType=1`}
                        key={item.id}
                        className="mt-2"
                      >
                        {t(item.country)}
                      </Link>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className=" text-primary text-md md:text-lg font-bold text-gray-900e">
                    {t("customerSupport")}
                  </h2>
                  <ul className="text-primary text-base">
                    {dataSupportClient.map((item) => (
                      <li
                        key={item.title}
                        className="mt-2 cursor-pointer"
                        onClick={() => {
                          //@ts-ignore
                          handleSupportCustomer(item.title);
                        }}
                      >
                        {t(item.title)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="">
                  <h2 className="text-primary text-md md:text-lg font-bold text-gray-900e mb-2">
                    {t("customerCare")}
                  </h2>
                  <a
                    className="flex item-center mb-2"
                    href={`tel:${linkWebView.phone}`}
                  >
                    <sourcesIcons.PhoneContact />
                    <p className="pl-2 text-primary">1900 638 380</p>
                  </a>
                  <a
                    className="flex item-center"
                    href={`mailto:${linkWebView.emailSkyfi}`}
                  >
                    <sourcesIcons.MailContact />
                    <p className="pl-2 text-primary">support@skyfi.vn</p>
                  </a>
                </div>
                <div className="md:flex-col md:gap-0">
                  <h2 className="text-primary text-md md:text-lg font-bold text-gray-900e mb-2">
                    {t("followUs")}
                  </h2>
                  <ul className="text-primary text-base flex">
                    <li>
                      <a href="#">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.4902 20.1191H7.49023C4.49023 20.1191 2.49023 18.1191 2.49023 15.1191V9.11914C2.49023 6.11914 4.49023 4.11914 7.49023 4.11914H17.4902C20.4902 4.11914 22.4902 6.11914 22.4902 9.11914V15.1191C22.4902 18.1191 20.4902 20.1191 17.4902 20.1191Z"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.8898 9.61847L14.3898 11.1185C15.2898 11.7185 15.2898 12.6185 14.3898 13.2185L11.8898 14.7185C10.8898 15.3185 10.0898 14.8185 10.0898 13.7185V10.7185C10.0898 9.41847 10.8898 9.01847 11.8898 9.61847Z"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-2">
                      <a href="#">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4902 9.41914V12.3191H17.0902C17.2902 12.3191 17.3902 12.5191 17.3902 12.7191L16.9902 14.6191C16.9902 14.7191 16.7902 14.8191 16.6902 14.8191H14.4902V22.1191H11.4902V14.9191H9.79023C9.59023 14.9191 9.49023 14.8191 9.49023 14.6191V12.7191C9.49023 12.5191 9.59023 12.4191 9.79023 12.4191H11.4902V9.11914C11.4902 7.41914 12.7902 6.11914 14.4902 6.11914H17.1902C17.3902 6.11914 17.4902 6.21914 17.4902 6.41914V8.81914C17.4902 9.01914 17.3902 9.11914 17.1902 9.11914H14.7902C14.5902 9.11914 14.4902 9.21914 14.4902 9.41914Z"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M15.4902 22.1191H9.49023C4.49023 22.1191 2.49023 20.1191 2.49023 15.1191V9.11914C2.49023 4.11914 4.49023 2.11914 9.49023 2.11914H15.4902C20.4902 2.11914 22.4902 4.11914 22.4902 9.11914V15.1191C22.4902 20.1191 20.4902 22.1191 15.4902 22.1191Z"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-2">
                      <a href="#">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.49023 22.1191H15.4902C20.4902 22.1191 22.4902 20.1191 22.4902 15.1191V9.11914C22.4902 4.11914 20.4902 2.11914 15.4902 2.11914H9.49023C4.49023 2.11914 2.49023 4.11914 2.49023 9.11914V15.1191C2.49023 20.1191 4.49023 22.1191 9.49023 22.1191Z"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4902 15.6191C14.4232 15.6191 15.9902 14.0521 15.9902 12.1191C15.9902 10.1861 14.4232 8.61914 12.4902 8.61914C10.5572 8.61914 8.99023 10.1861 8.99023 12.1191C8.99023 14.0521 10.5572 15.6191 12.4902 15.6191Z"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.1264 7.11914H18.1379"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-D6D6D6 lg:my-7" />
            <div className="lg:flex sm:items-center sm:justify-between">
              <ul className="text-primary text-base sm:flex">
                <li className="hidden sm:block font-medium mb-2 ms:mb-0 sm:mr-4 underline underline-offset-2">
                  <a href={BaseRoute.PrivacyPolicy}>{t("privacyPolicy")}</a>
                </li>
                <li className="hidden sm:block font-medium mb-2 ms:mb-0 sm:mr-4 underline underline-offset-2">
                  <a href={BaseRoute.TermsConditions}>
                    {t("termsAndConditions")}
                  </a>
                </li>
                {/* xs size */}
                <div className="flex justify-center gap-4 sm:hidden">
                  <li className="text-sm font-medium mb-2 ms:mb-0 sm:mr-4 underline underline-offset-3 leading-[24px]">
                    <a href={BaseRoute.PrivacyPolicy}>{t("privacyPolicy")}</a>
                  </li>
                  <li className="text-sm font-medium mb-2 ms:mb-0 sm:mr-4 underline underline-offset-3 leading-[24px]">
                    <a href={BaseRoute.TermsConditions}>
                      {t("termsAndConditions")}
                    </a>
                  </li>
                </div>
                {/* xs size */}
                <li className="text-center sm:text-left text-[16px] sm:text-md font-medium underline underline-offset-3 leading-[26px]">
                  <a href={BaseRoute.CookiesPolicy}>{t("cookiesPolicy")}</a>
                </li>
              </ul>
              <div className="text-center sm:text-left text-sm sm:text-base text-primary  mt-6 lg:mt-0">
                Copyright © 2024 SkyFi
              </div>
            </div>
          </div>
        </footer>
      </CommonComponent.Container>
    </div>
  );
}
