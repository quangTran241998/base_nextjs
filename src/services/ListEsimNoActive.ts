import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestEsimNoActive {
  accountId: string | number;
}

export interface ESimNoActive {
  title: string;
  packageId: string;
  packageName: string;
  coverageRange: CoverageRange[];
  data: string;
  day: number;
  price: number;
  currency: string;
  isSeller: boolean;
  voice: string;
  sms: string;
  status: number;
  iccid: string;
}

export interface CoverageRange {
  id: number;
  title: string;
  image: string;
}

export type Response = AxiosResponse<ResponseCommon<{ esims: ESimNoActive[] }>>;

class PackageListESimNoActive {
  getListESimNoActive(body: RequestCommon<RequestEsimNoActive>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new PackageListESimNoActive();
