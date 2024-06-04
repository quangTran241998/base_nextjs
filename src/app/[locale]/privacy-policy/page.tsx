"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { CommonComponent } from "@/components/commonComponent";
import SubPageBanner from "@/components/SubPageBanner";
import { linkWebView } from "@/consts/common";
import { LANGUAGE } from "@/interfaces/enum";

const classParagraph = "text-primary text-base";
const classHeading2 = "text-xl text-primary my-5 font-bold";
const classHeading3 = "text-xl text-primary my-5 font-bold";
const classLink = "text-sky-400/100 underline underline-offset-2";

const Page = ({ params: { locale } }: { params: { locale: LANGUAGE } }) => {
  const t = useTranslations("privacyPolicy");
  const tFooter = useTranslations("footer");

  const handleLangIntro = () => {
    switch (locale) {
      case LANGUAGE.VI:
        return (
          <span className="">
            Galaxy Telecom, hoạt động kinh doanh với tên SkyFi (
            <a href={linkWebView.skyfi} className="text-link" target="_blank">
              {linkWebView.skyfi}
            </a>
            ), nhận thức được tầm quan trọng của quyền riêng tư của bạn. Chính
            sách bảo mật này cho bạn biết thông tin cá nhân nào chúng tôi thu
            thập và cách chúng tôi sử dụng thông tin đó. Chúng tôi có thể thay
            đổi chính sách quyền riêng tư này tùy từng thời điểm, theo quyết
            định riêng của mình, như được thảo luận trong phần `9. Những thay
            đổi đối với Chính sách này` bên dưới. Khi đăng ký tài khoản hoặc sử
            dụng hay truy cập bất kỳ trang web, ứng dụng, sản phẩm, phần mềm,
            công cụ, nguồn cấp dữ liệu và/hoặc dịch vụ nào của SkyFi, bạn hiểu
            và đồng ý với các điều khoản của chính sách này. Xin vui lòng đọc
            chính sách này một cách cẩn thận. Nếu bạn có mối lo ngại về quyền
            riêng tư hoặc việc sử dụng dữ liệu chưa được giải quyết mà chúng tôi
            chưa giải quyết thỏa đáng, vui lòng liên hệ trực tiếp với chúng tôi
            theo địa chỉ{" "}
            <a
              href={`mailto:${linkWebView.emailSkyfi}`}
              className="text-link"
              target="_blank"
            >
              {linkWebView.emailSkyfi}
            </a>{" "}
            hoặc tìm thêm thông tin trong phần `7. Người dùng thay đổi hoặc cập
            nhật thông tin như thế nào`. SkyFi cam kết bảo mật quyền riêng tư
            của bạn. Thông báo về quyền riêng tư này giải thích cách chúng tôi
            thu thập, sử dụng, tiết lộ, lưu giữ và bảo vệ thông tin cá nhân của
            bạn.
          </span>
        );

      default:
        return (
          <span>
            Galaxy Telecom, doing business as SkyFi (
            <a href={linkWebView.skyfi} className="text-link" target="_blank">
              {linkWebView.skyfi}
            </a>
            ) recognizes the importance of your privacy. This privacy policy
            tells you what personal information we collect and how we use it. We
            may change this privacy policy from time to time, in its sole
            discretion, as discussed in section ‘9. Changes to This Policy’
            below. By registering an account or otherwise using or visiting any
            SkyFi website, application, product, software, tool, data feed,
            and/or service, you understand and agree to the terms of this
            policy. Please read this policy carefully. If you have an unresolved
            privacy or data use concern that we have not addressed
            satisfactorily, please contact us directly at{" "}
            <a
              href={`mailto:${linkWebView.emailSkyfi}`}
              className="text-link"
              target="_blank"
            >
              {linkWebView.emailSkyfi}
            </a>{" "}
            or find more information under section ‘7. How Does A User Change Or
            Update Information’. SkyFi is committed to your privacy. This
            privacy notice explains how we collect, use, disclose, retain, and
            protect your personal information.
          </span>
        );
    }
  };

  return (
    <>
      <>
        <SubPageBanner title={tFooter("privacyPolicy")} />
        <div className="sub-container">
          <div className="">{handleLangIntro()}</div>
          <h2 className={`${classHeading2}`}>{t("gdprPrinciplesIntro")}</h2>
          <ul className={`list-disc pl-6 ${classParagraph}`}>
            <li>{t("gdprClearPurpose")}</li>
            <li>{t("gdprRelevantData")}</li>
            <li>{t("gdprRetentionPeriod")}</li>
            <li>{t("gdprRightsOfIndividuals")}</li>
          </ul>
          <h2 className={`${classHeading2}`}>
            {t("informationCollectionHeading")}
          </h2>
          <h3 className={`${classHeading3}`}>
            {t("personallyIdentifiableInfo")}
          </h3>
          <p className={`${classParagraph} mb-5`}>
            {t("collectPersonalInfo")}
            <br /> {t("privacyPolicyScope")}
          </p>
          <p className={`${classParagraph}`}>
            {t("anonymizedInfo")}
            <br /> {t("choiceToProvideInfo")}
          </p>
          <h3 className={`${classHeading3}`}>{t("sensitivePersonalData")}</h3>
          <p className={`${classParagraph}`}>
            {t("handlingSensitiveData")}
            <br /> {t("consentToSensitiveData")}
          </p>
          <h3 className={`${classHeading3}`}>{t("nonPersonalInfo")}</h3>
          <p className={`${classParagraph}`}>
            {t("nonPersonalInfoDescription")}
          </p>
          <h3 className={`${classHeading3}`}>{t("cookiesStorage")}</h3>
          <p className={`${classParagraph} mb-5`}>{t("cookiesDescription")}</p>
          <p className={`${classParagraph}`}>
            {t("cookiesCategories")}
            {t("firstPartyCookies")}
            {t("thirdPartyCookies")}
          </p>

          <h2 className={`${classHeading2}`}>{t("typeOfCookies")}</h2>
          <h3 className={`${classHeading3}`}>
            {t("typeOfCookiesDescription")}
          </h3>
          <p className={`${classParagraph} mb-5`}>
            {t("strictlyNecessary")}
            {t("strictlyNecessaryDescription")}
          </p>
          <p className={`${classParagraph} mb-5`}>
            {t("functionality")}
            {t("functionalityDescription")}
          </p>
          <p className={`${classParagraph}`}>
            {t("performance")}
            {t("performanceDescription")}
          </p>

          <p className="mb-5">
            <a
              href={linkWebView.cookies}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.cookies}
            </a>
          </p>
          <p className={`${classParagraph} mb-5`}>{t("person")}</p>
          <p className="mb-5">
            <a
              href={"https://marketingplatform.google.com/about/"}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.privacy}
            </a>
          </p>
          <p className={`${classParagraph} mb-5`}>
            {t("person1")}
            <a
              href={linkWebView.preventGa}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.preventGa}
            </a>
            {t("targeting")}
            {t("targetingDescription")}
          </p>
          <h3 className={`${classHeading3}`}>{t("disablingCookies")}</h3>
          <p className={`${classParagraph} mb-5`}>
            {t("disablingCookiesDescription")}(
            <a
              href={linkWebView.infoPrivate}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.infoPrivate}
            </a>
            ),{t("disablingCookiesDescription1")}(
            <a
              href={linkWebView.optOutLink}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.optOutLink}
            </a>
            ).
            <br />
            {t("disablingCookiesDescription2")}
          </p>

          <h3 className={`${classHeading3}`}>{t("facebookCustomAudiences")}</h3>
          <p className={`${classParagraph} mb-5`}>
            {t("facebookCustomAudiencesDescription")}
          </p>
          <h3 className={`${classHeading3}`}>{t("pixelTags")}</h3>
          <p className={`${classParagraph} mb-5`}>
            {t("pixelTagsDescription")}
          </p>

          <h3 className={`${classHeading3}`}>{t("doNotTrackSignals")}</h3>
          <p className={`${classParagraph} mb-5`}>
            {t("doNotTrackSignalsDescription")}

            <a
              href={linkWebView.notTrack}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.notTrack}
            </a>
          </p>

          <h2 className={`${classHeading2} mb-5`}>
            {t("whatWeDoWithInformation")}
          </h2>
          <h3 className={`${classHeading3} mb-5`}>
            {t("informationWeCollect")}
          </h3>
          <p className={`${classParagraph} mb-5`}>
            {t("infor1")}
            <br /> {t("infor2")}
          </p>
          <ul className={`list-disc pl-6 ${classParagraph}`}>
            <li> {t("operateMaintainImproveServices")}</li>
            <li> {t("manageAccountCommunicate")}</li>
            <li> {t("operateAdministerPromotions")}</li>
            <li> {t("respondCommentsQuestionsCustomerService")}</li>
            <li> {t("sendInformation")}</li>
            <li> {t("sendMarketingEmails")}</li>
            <li>{t("processPayments")}</li>
            <li>{t("necessaryAppropriateComplyLaws")}</li>
          </ul>
          <p className={`${classParagraph} mb-5`}>{t("informationSharing")}</p>
          <p className={`${classParagraph} mb-5`}>
            {t("useInformationBetterServe")}
          </p>
          <p className={`${classParagraph} mb-5`}>{t("retainPersonalInfo")}</p>
          <p className={`${classParagraph} mb-5`}>
            {t("contactUsOptOut")}
            <a
              href={`mailto:${linkWebView.emailSkyfi}`}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.emailSkyfi}
            </a>{" "}
            {t("contactUsOptOut1")}
          </p>
          <p className={`${classParagraph} mb-5`}>{t("ekycInformation")}</p>

          <h2 className={`${classHeading2} mb-5`}>{t("disclosure")}</h2>
          <p className={`${classParagraph} mb-5`}>{t("inforComu")}</p>
          <ul className={`list-disc pl-6 ${classParagraph}`}>
            <li>{t("inforComu1")}</li>
            <li>{t("inforComu2")}</li>
            <li>{t("inforComu3")}</li>
            <li>{t("inforComu4")}</li>
          </ul>

          <h2 className={`${classHeading2} mb-5`}>{t("childrenPolicy")}</h2>
          <p className={`${classParagraph} mb-5`}>
            {t("theTermsOfServiceClearlyProvide")}
          </p>

          <h2 className={`${classHeading2} mb-5`}>{t("internationalUsage")}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: t("theServiceIsOwnedBySkyFi") }}
            className={`${classParagraph} mb-5`}
          ></p>

          <h2 className={`${classHeading2} mb-5`}>
            {t("howDoesAUserChangeOrUpdateInformation")}
          </h2>
          <p className={`${classParagraph} mb-5`}>
            {t("ifYouHaveAnyQuestionsOrConcerns")}
            <a
              href={`mailto:${linkWebView.emailSkyfi}`}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.emailSkyfi}
            </a>{" "}
          </p>

          <h2 className={`${classHeading2} mb-5`}>
            {t("securityAndEncryption")}
          </h2>
          <p className={`${classParagraph} mb-5`}>
            {t("weFollowGenerallyAcceptedIndustryStandards")}
            <a
              href={`mailto:${linkWebView.emailSkyfi}`}
              target="_blank"
              className={`${classLink}`}
            >
              {linkWebView.emailSkyfi}
            </a>{" "}
          </p>

          <h2 className={`${classHeading2} mb-5`}>
            {t("changesToThisPolicy")}
          </h2>
          <p className={`${classParagraph}`}>
            {t("weReserveTheRightToChangeTheTerms")}
          </p>
        </div>
      </>
    </>
  );
};

export default Page;
