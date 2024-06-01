export const LANG_ENUM = {
  vi: "vi",
  en: "en",
};

export enum PERMISSION_ENUM {
  PUBLIC = "PUBLIC",
  ADMIN = "admin",
  USER = "user",
  APP_MANAGER = "appmanager",
}
export enum STATUS_API {
  success = "success",
}
export const PermissionOptions = Object.entries(PERMISSION_ENUM)
  .filter((el) => {
    const [key, value] = el;
    return key !== PERMISSION_ENUM.PUBLIC && value !== PERMISSION_ENUM.ADMIN;
  })
  .map((el) => {
    const [key, value] = el;
    return {
      label: key,
      value: value,
    };
  });

export const NUMBER_DEFAULT_ROW_PER_PAGE = 5;
export const NUMBER_DEFAULT_PAGE = 0;

export const classCommon = {
  navTop: "nav-top",
  header: "header",
};

export const indexElement = {
  loading: 101,
  popup: 102,
  header: 100,
  overlay: 100,
  layoutTop: 10,
  layoutContent: 20,
  pushUp: 103,
};

export const device = () => {
  const width = screen.width;

  return {
    isMobile: width < 768,
    isTablet: width > 1024,
    isDesktop: width > 1200,
  };
};

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 768,
  lg: 984,
  xl: 1240,
};

export const linkWebView = {
  skyfi: "https://skyfi.vn/",
  emailSkyfi: "support@skyfi.vn",
  phone: "1900 638 380",
  cookies:
    "https://developers.google.com/analytics/resources/concepts/gaConceptsCookies",
  privacy: "www.google.com/analytics/learn/privacy.html",
  preventGa: "http://tools.google.com/dlpage/gaoptout?hl=en-GB",
  infoPrivate: "https://goo.gl/CUUMgi",
  optOutLink: "https://goo.gl/ghZWnt",
  notTrack: "http://www.allaboutdnt.com",
  paypal: "https://paypal.com",
  stripe: "https://stripe.com",
};
