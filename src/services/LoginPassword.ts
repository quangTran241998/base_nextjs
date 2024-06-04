import { ROOT_URL_LOGIN } from "@/consts/apiUrl";
import { ResponseCommonGateWay } from "@/interfaces/common";
import { Role } from "@/interfaces/user";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestLoginPassword {
  email: string;
  password: string;
}

export interface LoginPassword {
  code: number[];
  otpExpried: string;
}

interface Function {
  functionCode: string;
  functionName: string | null;
}

interface Api {
  apiCode: string;
  apiName: string | null;
  apiKey: string | null;
}

export interface ResponseLoginPassword {
  sessionId: string;
  username: string;
  domain: string | null;
  application: any[];
  role: Role[];
  function: Function[];
  api: Api[];
  token: string;
  accountId: number;
  firstLogin: boolean;
}

export type Response = AxiosResponse<ResponseCommonGateWay<ResponseLoginPassword>>;

class LoginsPasswordService {
  LoginPassword(body: RequestLoginPassword): Promise<Response> {
    return httpServices.post(`${ROOT_URL_LOGIN}`, body);
  }
}

export default new LoginsPasswordService();
