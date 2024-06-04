import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestVerifyOTP {
  otp: number | null;
}

export type Response = AxiosResponse<ResponseCommon<{}>>;

class VerifyOTPService {
  VerifyOTP(body: RequestCommon<RequestVerifyOTP>): Promise<Response> {
    
     return httpServices.post(`${ROOT_URL} `, body);
    
  }
}

export default new VerifyOTPService();
