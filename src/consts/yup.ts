import * as yup from "yup";
const commonValidate = {
  requiredInput: "Vui lòng nhập",
  requiredSelect: "Vui lòng chọn",
  phone: {
    format: "Số điện thoại không đúng định dạng",
    min: "Nhập tối thiểu 10 số",
  },
  email: {
    format: "Email không đúng định dạng.",
  },
};
export const validationBase = yup.object().shape({
  name: yup.string().required(),
});

export const paymentPackage = yup.object().shape({
  email: yup.string().required(`${commonValidate.requiredInput} email`).email(commonValidate.email.format),
});

export const contactRequired = yup.object().shape({
  customerName: yup.string().required(`${commonValidate.requiredInput} tên`),
  customerEmail: yup.string().email(commonValidate.email.format).required(`${commonValidate.requiredInput} email`),
  customerPhone: yup.string().required(`${commonValidate.requiredInput} số điện thoại`),
  subject: yup.string().required(`${commonValidate.requiredInput} chủ đề `),
  content: yup.string().required(`${commonValidate.requiredInput} nội dung`),
});
