import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestSettingESim {
  iccid: string;
}

interface CoverageRange {
  id: number;
  title: string;
  image: string;
}

interface InstallationGuides {
  en: string;
}

export interface Info {
  qrcodeUrl: string;
  manualInstallation: string;
  qrcodeInstallation: string;
  installationGuides: InstallationGuides;
}

interface packageInterface {
  packageId: string;
  packageName: string;
  title: string;
  price: number;
  pricePromotion: number;
  currency: string;
  data: string;
  day: number;
  isSeller: boolean;
  voice: string;
  sms: string;
  operator: string;
  esimIccid: string;
  isKycVerify: number;
  packageType: string;
  activationPolicy: string;
  coverageRange: CoverageRange[];
}
export interface SettingESimInterface {
  info: Info;
  package: packageInterface;
}

export type Response = AxiosResponse<ResponseCommon<SettingESimInterface>>;

class SettingESim {
  getSettingESim(body: RequestCommon<RequestSettingESim>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new SettingESim();
