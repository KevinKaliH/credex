import * as yup from "yup";
import { InitialFormModal, PaymentFormModel } from "../utils/paymentForm.model";
import { useMemo, useState } from "react";
import { FormikHelpers } from "formik";
import { TypeDocumentList } from "../utils/const";

const PaymentFormPageHelper = () => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [existQuery, setExistQuery] = useState(false);

  const validationSchema = useMemo(
    () =>
      yup.object({
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
        documentValue: yup
          .string()
          .when("docTypeId", (docTypeId: any, schema) => {
            const selectedDoc = TypeDocumentList.find(
              (i) => i.value == docTypeId
            );
            if (!selectedDoc) return schema.required();

            return schema
              .matches(selectedDoc.data.regex, selectedDoc.data.errorMessage)
              .required();
          }),
        firstName: yup.string().required(),
        lastName: yup.string().required(),

        valuePay: yup.lazy((_) => {
          console.log(existQuery);
          return existQuery
            ? yup.number().required()
            : yup.number().notRequired();
        }),
      }),
    [existQuery]
  );

  const onSubmit = async (
    values: PaymentFormModel,
    _: FormikHelpers<PaymentFormModel>
  ) => {
    await tempPost(values);
    setVisibleAlert(true);
    setExistQuery(true);
  };

  const closeAlert = () => {
    setVisibleAlert(false);
  };

  return {
    onSubmit,
    closeAlert,
    existQuery,
    visibleAlert,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;

function tempPost(values: any) {
  return new Promise((res: any, _: any) => {
    setTimeout(() => {
      res({ ok: true });
    }, 600);
  });
}
