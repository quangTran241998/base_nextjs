import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";

import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface RequestLoginSettingPassword {
  email: string;
  password: string;
}

export type Response = AxiosResponse<ResponseCommon<{}>>;

class LoginSettingPasswordService {
  LoginSettingPassword(body: RequestCommon<RequestLoginSettingPassword>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new LoginSettingPasswordService();
