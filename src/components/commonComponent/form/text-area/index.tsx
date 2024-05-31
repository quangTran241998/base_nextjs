import { sourcesIcons } from "../../../IconsSvg/index";
import { getIn } from "formik";
import { useEffect, useRef, useState } from "react";
import { AdditionalFormikProps } from "@/interfaces/common";
import Label, { LabelProps } from "../label/Label";

interface Props extends Omit<AdditionalFormikProps & LabelProps, "input"> {}

const TextAreaField = (props: Props) => {
  const { label, required, form, field, placeholder } = props;

  const [isShowCloseText, setIsShowCloseText] = useState<boolean>(false);
  const element = useRef<HTMLTextAreaElement>(null);

  const { name, value } = field || {};
  const { errors, touched, setFieldValue, setFieldTouched } = form || {};

  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);

  const isError = isTouched && errorMessage;

  useEffect(() => {
    value ? setIsShowCloseText(true) : setIsShowCloseText(false);
  }, [value]);

  return (
    <>
      <div
        className="relative"
        style={{
          border: isError ? `1px solid red` : `1px solid #ccc`,
          borderRadius: "8px",
        }}
      >
        <div className="absolute left-[16px] top-0 h-fit">
          <Label label={label} required={required} />
        </div>
        <textarea
          autoComplete="off"
          ref={element}
          className="pt-5 pb-1 px-4 w-full font-medium text-[#333] rounded-[16px] h-[140px] bg-white"
          value={value}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
          onBlur={() => setFieldTouched(name, true)}
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
          }}
        >
          <sourcesIcons.CloseTextInput />
        </div>
      </div>
      <p
        style={{ visibility: isError ? "visible" : "hidden" }}
        className="invalid-text"
      >
        {errorMessage ? errorMessage : "error"}
      </p>
    </>
  );
};

export default TextAreaField;
