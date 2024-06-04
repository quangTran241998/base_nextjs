import Footer from "@/components/footer";
import Header from "@/components/header";
import { LANGUAGE } from "@/interfaces/enum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact esim",
  description: "contact esim",
  keywords: ["contact esim", "contact thieu esim", "esim"],
};

export default async function ContactLayout({
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
