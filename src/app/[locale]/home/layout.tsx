import Footer from "@/components/footer";
import Header from "@/components/header";
import { LANGUAGE } from "@/interfaces/enum";

export default async function LocaleLayout({
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
