import Footer from "@/components/footer";
import Header from "@/components/header";
import { LANGUAGE } from "@/interfaces/enum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home esim",
  description: "Intro esim",
  keywords: ["intro esim", "gioi thieu esim", "esim"],
};

export default async function HomeLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LANGUAGE };
}) {
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
