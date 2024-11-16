import * as yup from "yup";
import { TypeDocumentList } from "@payment/utils/const";

export function formSchema(existQuery: boolean) {
  return yup.object({
    targetNumber: yup
      .string()
      .required()
      .test(
        "no-spaces",
        "Credit card number must not contain spaces",
        (value) => {
          return !value || !/\s/.test(value);
        }
      )
      .transform((value) => value.replace(/\s+/g, ""))
      .matches(/^[0-9]+$/, "Only numbers are allowed")
      .min(13)
      .max(19),
    currencyId: yup.number().required(),

    docTypeId: yup.number().required(),
    documentValue: yup.string().when("docTypeId", (docTypeId: any, schema) => {
      const selectedDoc = TypeDocumentList.find((i) => i.value == docTypeId);
      if (!selectedDoc) return schema.required();

      return schema
        .matches(selectedDoc.data.regex, selectedDoc.data.errorMessage)
        .required();
    }),
    firstName: yup.string().required(),
    lastName: yup.string().required(),

    valuePay: yup.lazy((_) => {
      return existQuery ? yup.number().required() : yup.number().notRequired();
    }),
  });
}
