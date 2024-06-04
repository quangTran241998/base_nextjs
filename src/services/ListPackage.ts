import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export enum TypePackages {
  nation = 1,
  area = 2,
  global = 3,
}

export interface RequestPackage {
  locationId: number;
  type: TypePackages;
}

export interface RequestPackageDetail {
  packageId: string;
}

export interface Package {
  packageId: number | string;
  packageName: string;
  title: string;
  price: number | string;
  pricePromotion: number;
  currency: string;
  //@ts-ignore
  data: data; //GB
  day: number;
  isSeller: boolean;
  voice: string;
  sms: string;
  coverageRange: CoverageRange[];
}

export interface CoverageRange {
  id: number;
  title: string;
  image: string;
}

export type Response = AxiosResponse<ResponseCommon<{ packages: Package[]; info: string; package: Package }>>;

class ListPackageService {
  getListPackage(body: RequestCommon<RequestPackage>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new ListPackageService();
