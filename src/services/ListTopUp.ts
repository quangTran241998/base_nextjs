import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface PackageTopUp {
  packageId: string;
  packageName: string;
  title: string;
  price: number;
  currency: string;
  data: string; // GB
  day: number; // Number of days validity
  voice: string; // Voice allowance, if any
  sms: string; // SMS allowance, if any
}
export interface TopUpInterface {
  iccid: string;
}

export type Response = AxiosResponse<ResponseCommon<{ packages: PackageTopUp[] }>>;

class ListTopUp {
  getListTopUp(body: RequestCommon<TopUpInterface>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new ListTopUp();
