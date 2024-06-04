import { LANGUAGE } from "@/interfaces/enum";
import httpServices from "@/services/httpServices";

export const getLocale = () => {
  const pathCurrent = location.pathname.split("/");
  return pathCurrent[1] as LANGUAGE;
};

export const requestBaseApi = (props: {
  sessionId?: string;
  token?: string;
  wsCode: string;
  wsRequest?: string;
}) => {
  const { sessionId, token, wsCode, wsRequest } = props;
  return {
    sessionId: sessionId ?? httpServices.getUserStorage()?.sessionId ?? "",
    token: token ?? httpServices.getUserStorage()?.token ?? "",
    wsCode: wsCode ?? "",
    wsRequest: wsRequest ?? {},
  };
};
