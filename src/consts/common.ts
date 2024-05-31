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
};

export const indexElement = {
  loading: 101,
  popup: 102,
  header: 100,
  overlay: 100,
  layoutTop: 40,
  layoutContent: 20,
  pushUp: 50,
};

export const linkWebView = {
  skyfi: "https://skyfi.vn/",
  emailSkyfi: "support@skyfi.vn",
  phone: "1900 638 380",
  cookies: "https://developers.google.com/analytics/resources/concepts/gaConceptsCookies",
  privacy: "www.google.com/analytics/learn/privacy.html",
  preventGa: "http://tools.google.com/dlpage/gaoptout?hl=en-GB",
  infoPrivate: "https://goo.gl/CUUMgi",
  optOutLink: "https://goo.gl/ghZWnt",
  notTrack: "http://www.allaboutdnt.com",
  paypal: "https://paypal.com",
  stripe: "https://stripe.com",
};

export const formatNumber = (num: number, unit: string = "VNĐ") => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " " + unit;
export const total = (x: number, y: number) => {
  let total = 0;
  total += x + y;
  return formatNumber(total);
};
export const formatNumberNoVND = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ";

export enum STATUS_API {
  success = "success",
}
