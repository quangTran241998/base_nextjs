import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestLoginOTP {
  email: string;
}

export interface LoginOTP {
  code: number[];
  otpExpried: string;
}

export type Response = AxiosResponse<ResponseCommon<{ otp: LoginOTP }>>;

class LoginOTPService {
  OTP(body: RequestCommon<RequestLoginOTP>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new LoginOTPService();
