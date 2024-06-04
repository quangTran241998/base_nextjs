import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface CreateOrderProps {
  packageId: string;
  customerName?: string;
  customerEmail: string;
  skyjoyMember?: string;
  price: number;
  quantity: number;
  appCode?: string;
}

export interface ResponseCreateOrder {
  createTime: string;
  updateTime: string;
  createUser: string;
  updateUser: string;
  id: number;
  orderCode: string;
  orderCodeThirdParty: string;
  customerId: number;
  price: number;
  currency: "USD";
  quantity: 1;
  orderStatus: 1;
  paymentStatus: 0;
  manualInstallation: "<p><b>eSIM name:</b> Chinacom</p><p><b>Coverage: </b>China</p><p><b>To manually activate the eSIM on your eSIM capable device:</b></p><ol><li>Settings > Cellular/Mobile > Add Cellular/Mobile Plan.</li><li>Manually enter the SM-DP+ Address and activation code.</li><li>Confirm eSIM plan details.</li><li>Label the eSIM.</li></ol><p><b>To access Data:</b></p><ol><li>Enable data roaming.</li></ol>";
  qrcodeInstallation: "<p><b>eSIM name:</b> Chinacom<br></p><p><b>Coverage: </b>China</p><p><b>To activate the eSIM by scanning the QR code on your eSIM capable device you need to print or display this QR code on another device:</b></p><ol><li>Settings > Cellular/Mobile > Add Cellular/Mobile Plan.</li><li>Scan QR code.</li><li>Confirm eSIM plan details.</li><li>Label the eSIM.</li></ol><p><b>To access Data:</b></p><ol><li>Enable data roaming.<br></li></ol>";
  appCode: "SKYJOY";
  parentId: null;
  type: "sim";
  installationGuides: {
    en: "https://www.airalo.com/help/getting-started-with-airalo";
  };
  details: [
    {
      id: 22;
      orderId: 21;
      esimIccid: "893000000000034937";
      packageId: "chinacom-7days-1gb";
      qrcodeUrl: "https://sandbox.airalo.com/qr?expires=1802591061&id=138768&signature=6542fe0b0d252ed71ad8b48c04be8162cfc553d71456d09b85c4a5036bae567c";
      qrcode: "LPA:1$lpa.airalo.com$TEST";
      apnType: "automatic";
      apnValue: null;
      esimStatus: 0;
      expiredAt: null;
    }
  ];
}

export type Response = AxiosResponse<ResponseCommon<ResponseCreateOrder>>;

class CreateOrderService {
  CreateOrder(body: RequestCommon<CreateOrderProps>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new CreateOrderService();
