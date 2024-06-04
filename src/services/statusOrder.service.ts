import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface Request {
  orderCode: string;
  status: 0 | 1 | number;
}

export interface Area {}

export type Response = AxiosResponse<ResponseCommon<{}>>;

class StatusOrder {
  updateStatusOrder(body: RequestCommon<Request>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new StatusOrder();
