import { LANGUAGE } from "@/interfaces/enum";
import BuyEsimLayout from "@/layout/buy-esim-layout";

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
        <BuyEsimLayout locale={locale}>{children}</BuyEsimLayout>
      </body>
    </html>
  );
}
