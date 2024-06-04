import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import { Area } from "./ListArea.service";
import { Nation } from "./ListNation.service";
import httpServices from "./httpServices";

export interface Request {
  textSearch: string;
  areaId?: number;
}

export interface SearchLocation {
  nations: Nation[];
  areas: Area[];
}

export type Response = AxiosResponse<ResponseCommon<SearchLocation>>;

class ListSearchLocationService {
  getAll(body: RequestCommon<Request>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new ListSearchLocationService();
