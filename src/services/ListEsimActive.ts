import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestEsimActive {
  accountId: string | number;
}

export interface ESimActive {
  title?: string;
  packageId: number | string;
  packageName: string;
  price: number;
  currency: string;
  data: string; //GB
  day: number;
  isSeller: boolean;
  operator: string;
  isKycVerify: number;
  packageType: string;
  voice: string;
  sms: string;
  duration: number;
  date: string;
  unit: string;
  status: number;
  esimCardSize: string;
  remainingData: number;
  pricePromotion: number;
  coverageRange: CoverageRange[];
  iccid: string;
  totalData: number | null;
}

export interface CoverageRange {
  id: number;
  title: string;
  image: string;
}

export type Response = AxiosResponse<ResponseCommon<{ esims: ESimActive[] }>>;

class PackageListESimActive {
  getListESimActive(body: RequestCommon<RequestEsimActive>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new PackageListESimActive();
