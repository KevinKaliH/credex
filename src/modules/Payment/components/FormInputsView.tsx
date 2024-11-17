import { useFormikContext } from "formik";
import { Fragment } from "react/jsx-runtime";
import {
  CurrencyList,
  FORM_LABELS,
  TypeDocumentList,
} from "@payment/utils/const";
import Grid2 from "@mui/material/Grid2";
import { memo, useMemo } from "react";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";

const FormInputsView = memo(() => {
  return (
    <section id="viewData bg-primary">
      <div className="bg-white">
        <div className="border-bottom px-3 py-2">
          <p className="fw-semibold text-primary m-0">RESUMEN DE TRANSACCIÓN</p>
        </div>
        <div className="p-2">
          <InputVisibleData />
        </div>
      </div>

      <div className="bg-white mt-3 grid">
        <div className="border-bottom px-3 py-3">
          <p className="fw-semibold text-primary m-0">SERVICIO A PAGAR</p>
        </div>
        <div className="p-5 text-center">
          <img
            className="my-4"
            src="https://logosnicas.com/wp-content/uploads/2022/10/credex.png"
            width={120}
          />
        </div>
      </div>
    </section>
  );
});

export default FormInputsView;

const InputVisibleData = () => {
  const { values } = useFormikContext<PaymentFormModel>();

  const filteredValues = useMemo(() => formatKeyValue(values), [values]);

  return (
    <Grid2 container rowSpacing={1} columnSpacing={1}>
      {filteredValues.map((value) => (
        <Fragment key={value.key}>
          <Grid2 size={6}>
            <p className="text-secondary m-0">{FORM_LABELS[value.key]}</p>
          </Grid2>
          <Grid2 size={6}>
            <p className="m-0 text-end text-truncate">{value.val}</p>
          </Grid2>
        </Fragment>
      ))}
    </Grid2>
  );
};

function formatKeyValue(objectValues: any) {
  return Object.entries(objectValues ?? {})
    .filter(
      ([_, value]) => value !== null && value !== "" && value !== undefined
    )
    .map((value) => {
      let { "0": key, "1": val } = value;

      if (key == "docTypeId")
        val = TypeDocumentList.find((i) => i.value == val)!.label;
      else if (key == "currencyId")
        val = CurrencyList.find((i) => i.value == val)!.label;
      else if (key == "targetNumber") val = objectValues["targetNumberMask"];
      else if (key == "valuePay") {
        val =
          CurrencyList.find((i) => i.value == objectValues["currencyId"])?.data
            ?.prefix +
          `$ ${isNaN(Number(val)) ? val : Number(val).toLocaleString()}`;
      }

      return {
        key,
        val: val as string,
      };
    })
    .filter((i) => i.key in FORM_LABELS);
}
