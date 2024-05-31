import Header from "@/components/header";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
