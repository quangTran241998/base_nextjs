import Footer from "@/components/footer";
import Header from "@/components/header";
import { LANGUAGE } from "@/interfaces/enum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "privacy policy",
  description: "privacy policy esim",
  keywords: ["privacy policy esim", "privacy policy esim", "esim"],
};

export default async function PrivacyPolicyLayout({
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
