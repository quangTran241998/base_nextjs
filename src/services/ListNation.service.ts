import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface Request {}

export interface Nation {
  countryId: number;
  title: string;
  image: string;
  country_id: number;
}

export type Response = AxiosResponse<ResponseCommon<{ nations: Nation[] }>>;

class ListNationService {
  getAll(body: RequestCommon<Request>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new ListNationService();
