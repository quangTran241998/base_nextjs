import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface Request {}

export interface ResponseDevices {
  brand: {
    name: string;
    devices: Device[];
  };
}

export interface Device {
  name: string;
  os: string;
}

export type Response = AxiosResponse<ResponseCommon<{ brand: ResponseDevices }>>;

class ListDeviceService {
  getAll(body: RequestCommon<Request>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new ListDeviceService();
