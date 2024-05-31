import { FieldInputProps, FormikProps } from "formik";

export interface AdditionalFormikProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  placeholder: string;
}

//* Common interface
export interface RequestCommon<T> {
  sessionId: string;
  token: string;
  wsCode: string;
  wsRequest: T;
}

export interface ResponseCommon<T> {
  errorCode: string;
  errorMessage: string;
  message: string;
  result: {
    errorCode: string;
    message: string;
    wsResponse: T;
  };
}
export interface ResponseCommonGateWay<T> {
  errorCode: string;
  errorMessage: string;
  message: string;
  result: T;
}

export interface Option {
  label: string;
  value: string;
}
