import createMiddleware from "next-intl/middleware";
import { LANGUAGE } from "./interfaces/enum";

export default createMiddleware({
  // A list of all locales that are supported
  locales: [LANGUAGE.EN, LANGUAGE.VI],

  // Used when no locale matches
  defaultLocale: LANGUAGE.VI,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};
