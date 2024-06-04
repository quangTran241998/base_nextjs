import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { LANGUAGE } from "./interfaces/enum";

// Can be imported from a shared config
const locales = [LANGUAGE.EN, LANGUAGE.VI];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as LANGUAGE)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
