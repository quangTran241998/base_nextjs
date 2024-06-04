import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";
import { AppCode } from "@/interfaces/enum";

export interface Request {
  orderCode: string;
  appCode: AppCode;
}
export interface Global {
  areaId: number;
  title: string;
  image: string;
}

export interface ResponseGetLinkRedirectPay {
  requestID: string;
  responseCode: string;
  responseData: {
    endpoint: string;
    qrCode: string;
    transactionID: string;
  };
  transactionID: string;
  responseMessage: string;
}

export type Response = AxiosResponse<ResponseCommon<ResponseGetLinkRedirectPay>>;

class GetLinkRedirect {
  redirectPay(body: RequestCommon<Request>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new GetLinkRedirect();
