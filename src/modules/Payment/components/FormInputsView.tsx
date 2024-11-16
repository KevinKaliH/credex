import { useFormikContext } from "formik";
import { Fragment } from "react/jsx-runtime";
import { CurrencyList, FORM_LABELS, TypeDocumentList } from "../utils/const";
import Grid2 from "@mui/material/Grid2";
import { memo, useMemo } from "react";
import { PaymentFormModel } from "../utils/paymentForm.model";

const FormInputsView = memo(() => {
  return (
    <section id="viewData bg-primary">
      <div className="bg-white">
        <div className="border-bottom px-3 py-2">
          <p className="fw-semibold text-primary m-0">RESUMEN DE TRANSACCIÓN</p>
        </div>
        <div className="p-2">
          <InputVisibleData />
          <p className="border-top mt-3">Total</p>
        </div>
      </div>

      <div className="bg-white mt-3 grid">
        <div className="border-bottom px-3 py-2">
          <p className="fw-semibold text-primary m-0">SERVICIO A PAGAR</p>
        </div>
        <div className="p-5 text-center">
          <img src="https://logosnicas.com/wp-content/uploads/2022/10/credex.png" width={120} />
        </div>
      </div>
    </section>
  );
});

export default FormInputsView;

const InputVisibleData = () => {
  const { values } = useFormikContext<PaymentFormModel>();

  const filteredValues = useMemo(() => formatKeyValue(values), [values]);

  return (<Grid2 container rowSpacing={1} columnSpacing={1}>
    {
      filteredValues.map(value => (
        <Fragment key={value.key}>
          <Grid2 size={6}>
            <p className='m-0'>{FORM_LABELS[value.key]}</p>
          </Grid2>
          <Grid2 size={6}>
            <p className="m-0 text-end text-truncate">{value.val}</p>
          </Grid2>
        </Fragment>
      ))
    }
  </Grid2>)
}

function formatKeyValue(objectValues: any) {
  return Object.entries(objectValues ?? {})
    .filter(
      ([_, value]) => value !== null && value !== '' && value !== undefined
    ) // no empty data
    .map(value => {
      let { "0": key, "1": val } = value;

      if (key == 'docTypeId')
        val = TypeDocumentList.find(i => i.value == val)!.label
      else if (key == 'currencyId')
        val = CurrencyList.find(i => i.value == val)!.data.prefix + '$';
      else if (key == 'targetNumber')
        val = objectValues['targetNumberMask'];

      return {
        key,
        val
      }
    }) // id matches
    .filter(i => i.key in FORM_LABELS) // key exist in labels view
}
