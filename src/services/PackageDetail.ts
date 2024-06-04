import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestPackageDetail {
  packageId: string | number;
}

export interface PackageDetail {
  packageId: string | number;
  packageName: string;
  title: string;
  price: number;
  pricePromotion: number;
  currency: string;
  data: string; //GB
  day: number;
  isSeller: boolean;
  operator: string;
  isKycVerify: number;
  packageType: string;
  activationPolicy: string;
  voice: string;
  sms: string;
  coverageRange: CoverageRange[];
}

export interface CoverageRange {
  id: number;
  title: string;
  image: string;
}

export type Response = AxiosResponse<ResponseCommon<{ packages: PackageDetail[]; package: PackageDetail; info: any }>>;

class PackageServiceDetail {
  getListPackage(body: RequestCommon<RequestPackageDetail>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new PackageServiceDetail();
