import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestInfoEsimActive {
  iccid: string;
}

export interface PackageTopUp {
  id: number;
  orderId: number;
  packageId: string;
  orderType: string;
  expiredAt: string;
  date: string;
  duration: number;
  data: string;
  day: number;
  price: number;
  currency: string;
  iccid: string | null;
  packageName: string;
}

export interface EsimData {
  packageId: string;
  packageName: string;
  title: string;
  price: number;
  pricePromotion: number;
  currency: string;
  data: string;
  amount: number;
  day: number;
  isSeller: boolean;
  voice: number;
  sms: number;
  operator: string;
  packageType: string;
  activationPolicy: string;
  isKycVerify: boolean;
  slug: string;
  isHidden: boolean;
  netPrice: number;
  coverageRange: CoverageRange[];
  iccid: string | null;
  date: string;
  duration: number;
  esimCardSize: string | null;
  unit: string;
  qrcodeUrl: string | null;
  manualInstallation: string | null;
  qrcodeInstallation: string | null;
  installationGuides: string | null;
  remainingData: number;
  remainingVoice: number | null;
  remainingSms: number | null;
  packages: PackageTopUp[];
  totalData: number | null;
}

export interface CoverageRange {
  id: number;
  title: string;
  image: string;
}

export type Response = AxiosResponse<ResponseCommon<{ esim: EsimData }>>;

class PackageInfoEsimActive {
  InfoEsimActive(body: RequestCommon<RequestInfoEsimActive>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new PackageInfoEsimActive();
