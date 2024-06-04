import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollScene } from "scrollscene";
import "./index.css";
// import { dataImage, dataScroll } from "@/consts/home";
import Image from "next/image";
import { dataImage, dataScroll } from "@/mocks/home";
import { isValidHex } from "../../page";
import { useTranslations } from "next-intl";

const Card = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <div className={className}>
    <div className="card-inner">
      <div>{children}</div>
    </div>
  </div>
);

const ScrollCardCustom = () => {
  const t = useTranslations("home");

  useEffect(() => {
    gsap.registerEffect({
      name: "scaleDown",
      effect: (targets: gsap.TweenTarget, config: { ease: any }) => {
        return gsap.to(targets, {
          ease: config.ease,
          scale: 0.7,
          y: -20,
        });
      },
      defaults: {
        ease: "power1.out",
      },
      extendTimeline: true,
    });
    const CreateCardsScene = (el: Element): void => {
      return new (ScrollScene as any)({
        triggerElement: el.nextElementSibling as Element,
        offset: -150,
        triggerHook: 0.5,
        gsap: {
          timeline: stackedCardsTl(el),
        },
        duration: "100%",
      });
    };

    const stackedCardsTl = (el: Element) => {
      const timeline = gsap.timeline({ paused: true });
      timeline.addLabel("in").scaleDown(el);
      return timeline;
    };

    const stackedCards = (cardClassName: string): void => {
      const cards = document.querySelectorAll(cardClassName);
      for (let index = 0; index < cards.length - 1; index++) {
        CreateCardsScene(cards[index]);
      }
    };

    stackedCards(".card");
  }, []);
  return (
    <div className="text-[#333333] ">
      <div className="cards bg-[#F3F9F6]">
        <h2
          dangerouslySetInnerHTML={{ __html: t("customersCareTrust") }}
          className="text-[26px] leading-[33.6px] md:text-[60px] font-bold z-10 md:leading-[72px] text-center py-10 md:pt-[120px] md:pb-20 relative"
        ></h2>
        <div className=" hidden md:block">
          <Image
            className="absolute top-0 right-0 "
            src={dataImage.imgHomepage5}
            alt="vector"
          />
        </div>
        <div className=" hidden md:block">
          <Image
            src={dataImage.imgHomepage4}
            alt="Polygon"
            className="absolute left-0 top-[10%] "
          />
        </div>
        {dataScroll.map((item) => {
          const bgColor = isValidHex(item.bg) ? `#${item.bg}` : "#FFFFFF";
          return (
            <Card className="card" key={item.id}>
              <div className="z-[10] relative ">
                <div
                  style={{ backgroundColor: bgColor }}
                  className="w-auto min-w-[350px]  sm:w-[600px] md:w-[768px] lg:w-[984px] xl:w-[1156px]  h-[540px] md:h-[480px] lg:h-[560px] xl:h-[610px] absolute  left-1/2 -translate-x-1/2 transform p-[40px] flex flex-col-reverse md:flex-row md:gap-8 gap-2 md:justify-between items-center rounded-2xl"
                >
                  <div className="md:w-1/2">
                    <div className="flex justify-center">
                      <Image src={dataImage.iconHomepage} alt="icon" />
                    </div>
                    <p
                      className={`text-primary font-bold text-[14px] md:text-[30px] leading-[20px] md:leading-[36px] text-center my-4 `}
                    >
                      {t(item.title)}
                    </p>{" "}
                    <div className="text-center text-secondary text-[18px]">
                      {item.auth}
                    </div>
                  </div>

                  <div className="md:w-1/2 ">
                    <Image
                      src={item.img}
                      alt="avatar"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollCardCustom;
