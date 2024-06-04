import { sourceImage } from "@/assets/images";
import Image from "next/image";
type Props = {
  title: string;
};
export default function SubPageBanner({ title }: Props) {
  return (
    <div className={`py-28 md:py-36 relative`}>
      <Image
        src={sourceImage.banner.bannerTopFooter}
        alt="banner footer"
        className="absolute top-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      <div className="">
        <h1 className="text-primary font-bold text-3xl sx:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
