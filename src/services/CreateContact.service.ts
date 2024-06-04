import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface CreateContactProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deviceModel: string;
  esimIccid: string;
  subject: string;
  content: string;
}

export type Response = AxiosResponse<ResponseCommon<{}>>;

class CreateContactService {
  CreateOrder(body: RequestCommon<CreateContactProps>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new CreateContactService();
