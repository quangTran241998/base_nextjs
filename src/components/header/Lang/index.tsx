"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { sourcesIcons } from "../../IconsSvg/index";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { LANGUAGE } from "@/interfaces/enum";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
  locale: LANGUAGE;
}

const LangSelect = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [widthContent, setWidthContent] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const { locale } = props;
  const t = useTranslations("lang");
  const router = useRouter();

  const langOptions = [LANGUAGE.VI, LANGUAGE.EN];

  const onChangeLang = (lang: LANGUAGE) => {
    const pathCurrent = location.pathname.split("/");
    pathCurrent.splice(1, 1, lang);
    const convertPath = pathCurrent.join("/");
    router.push(convertPath);
    setIsOpen(false);
  };

  useEffect(() => {
    setWidthContent(ref.current?.offsetWidth ?? 0);
  }, [ref]);

  return (
    <Popover.Root open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <Popover.Trigger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          ref={ref}
          className="flex items-center px-2 py-3 rounded-[8px] border"
        >
          <sourcesIcons.Language />
          <p className="ml-2 text-[18px] font-medium px-2">{t(locale)}</p>
          <sourcesIcons.ChevronDown />
        </div>
      </Popover.Trigger>
      <Popover.Content align={"start"} className="z-10">
        <div
          className="border py-2 rounded-[8px] mt-1 bg-white"
          style={{ width: `${widthContent}px` }}
        >
          {langOptions.map((item) => {
            return (
              <p
                key={item}
                className="px-4 py-2 hover:bg-slate-100 font-medium cursor-pointer"
                onClick={() => onChangeLang(item)}
              >
                {t(item)}
              </p>
            );
          })}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
export default LangSelect;
