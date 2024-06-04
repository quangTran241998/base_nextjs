import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestCheckEmailLogin {
  email: string;
}

export interface checkEmailLogin {
  result: boolean;
}

export type Response = AxiosResponse<ResponseCommon<checkEmailLogin>>;

class CheckEmailLogin {
  CheckEmailLogin(body: RequestCommon<RequestCheckEmailLogin>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new CheckEmailLogin();
