import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface Request {}

export interface Area {
  areaId: number;
  title: string;
  image: string;
}

export type Response = AxiosResponse<ResponseCommon<{ areas: Area[] }>>;

class ListAreaService {
  getAll(body: RequestCommon<Request>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new ListAreaService();
