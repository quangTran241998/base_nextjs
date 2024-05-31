import { getIn } from "formik";
import { useEffect, useRef, useState } from "react";
import Label, { LabelProps } from "../label/Label";
import { sourcesIcons } from "@/components/IconsSvg";
import { AdditionalFormikProps } from "@/interfaces/common";

interface Props extends Omit<AdditionalFormikProps & LabelProps, "input"> {
  isErrorCustom?: boolean;
  textErrorCustom?: string;
  setIsError?: (value: boolean) => void;
  maxLength?: number;
}

const InputField = (props: Props) => {
  const {
    label,
    required,
    form,
    field,
    placeholder,
    isErrorCustom,
    textErrorCustom,
    setIsError,
    maxLength,
  } = props;

  const [isShowCloseText, setIsShowCloseText] = useState<boolean>(false);
  const element = useRef<HTMLInputElement>(null);

  const { name, value } = field || {};
  const { errors, touched, setFieldValue, setFieldTouched } = form || {};

  const isTouched = getIn(touched, name!);
  const errorMessage = isErrorCustom ? textErrorCustom : getIn(errors, name!);
  console.log("errorMessage", errorMessage);
  const isError = isErrorCustom ? isErrorCustom : isTouched && errorMessage;

  useEffect(() => {
    value ? setIsShowCloseText(true) : setIsShowCloseText(false);
  }, [value]);
  const [errorLength, setErrorLength] = useState(false);
  return (
    <>
      <div
        className="relative"
        style={{
          border: isError ? `1px solid red` : `1px solid #ccc`,
          borderRadius: "8px",
        }}
      >
        <div className="absolute left-[16px] top-1 h-fit">
          <Label label={label} required={required} />
        </div>
        <input
          ref={element}
          type="text"
          className="pt-7 pb-1 px-4 w-full bg-[#fff] font-medium text-[#333] rounded-[8px] pr-11"
          value={value}
          onChange={(e) => {
            const value = e.target.value.trim();
            if (value.length >= (200 || maxLength)) {
              setErrorLength(true);
            } else {
              setErrorLength(false);
            }

            setFieldValue(name, e.target.value.trim());
            setIsError && setIsError(false);
          }}
          maxLength={maxLength ? maxLength : 200}
          onBlur={() => setFieldTouched(name, true)}
          autoComplete="off"
          placeholder={placeholder}
        />
        <div
          className="absolute right-4 top-[50%] cursor-pointer"
          style={{
            transform: "translate(0,-50%)",
            display: isShowCloseText ? "block" : "none",
          }}
          onClick={() => {
            setFieldValue(name, "");
            element.current?.focus();
            setIsError && setIsError(false);
            setErrorLength(false);
          }}
        >
          <sourcesIcons.CloseTextInput />
        </div>
      </div>
      <p
        style={{ visibility: isError || errorLength ? "visible" : "hidden" }}
        className="invalid-text min-h-5"
      >
        {errorMessage && !errorLength && errorMessage}
        {/* {errorLength && `${label} ${t("inputErrorLength")}`} */}
      </p>
    </>
  );
};

export default InputField;
