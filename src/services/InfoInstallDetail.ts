import { ROOT_URL } from "@/consts/apiUrl";
import { RequestCommon, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "./httpServices";

export interface simIccId {
  iccid: string;
}

interface InstallationStep {
  [stepNumber: number]: string;
}

interface InstallationViaQRCode {
  steps: InstallationStep;
  qrCodeData: string;
  qrCodeUrl: string;
}

interface InstallationManual {
  steps: InstallationStep;
  smdpAddressAndActivationCode: string;
}

interface NetworkSetup {
  steps: InstallationStep;
  apnType: string;
  apnValue: string;
  roaming: boolean;
}

export interface IOSDevice {
  model: string | null;
  version: string | null;
  installationViaQrCode: InstallationViaQRCode;
  installationManual: InstallationManual;
  networkSetup: NetworkSetup;
}

export interface AndroidDevice {
  model: string | null;
  version: string | null;
  installationViaQrCode: InstallationViaQRCode;
  installationManual: InstallationManual;
  networkSetup: NetworkSetup;
}

export interface DeviceConfig {
  language?: string;
  ios?: IOSDevice[];
  android?: AndroidDevice[];
}

export type Response = AxiosResponse<ResponseCommon<{ instructions: DeviceConfig }>>;

class InfoInstallDetail {
  getInfoInstallDetail(body: RequestCommon<simIccId>): Promise<Response> {
    return httpServices.post(`${ROOT_URL}`, body);
  }
}

export default new InfoInstallDetail();
