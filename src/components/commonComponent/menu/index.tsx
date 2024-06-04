// index.jsx
import * as Popover from "@radix-ui/react-popover";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { sourcesIcons } from "../../IconsSvg/index";

const PopoverDemo = () => {
  const t = useTranslations("lang");

  const langOptions = ["vi", "en"];

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="flex items-center px-2 py-3 rounded-[8px] border">
          <sourcesIcons.Language />
          <p className="ml-2 text-[18px] font-medium px-2">{t("vi")}</p>
          <sourcesIcons.ChevronDown />
        </div>
      </Popover.Trigger>
      <Popover.Content align={"start"}>
        <div className="border py-2 rounded-[8px] w-[188px] mt-1">
          {langOptions.map((item) => {
            return (
              <div
                key={item}
                className="px-4 py-2 hover:bg-slate-100 font-medium"
              >
                <Link href={"/"} locale={item}>
                  {t(item)}
                </Link>
              </div>
            );
          })}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
export default PopoverDemo;
