import { useFormikContext } from "formik";
import { Fragment } from "react/jsx-runtime";
import { FORM_LABELS } from "../utils/const";
import Grid2 from "@mui/material/Grid2";

const FormInputsView = () => {
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
        <div className="p-5">
          <img src="https://logosnicas.com/wp-content/uploads/2022/10/credex.png" width={120} />
        </div>
      </div>
    </section>
  );
};

export default FormInputsView;

const InputVisibleData = () => {
  const { values } = useFormikContext();

  const filteredValues = Object.entries(values ?? {}).filter(
    ([_, value]) => value !== null && value !== '' && value !== undefined
  );

  return (<Grid2 container rowSpacing={1} columnSpacing={1} maxWidth={'400px'} minWidth={'300px'}>
    {
      filteredValues.map(value => (
        <Fragment key={value[0]}>
          <Grid2 size={6}>
            <p className='m-0'>{FORM_LABELS[value[0]]}</p>
          </Grid2>
          <Grid2 size={6}>
            <p className="m-0 text-end text-truncate">{value[1]}</p>
          </Grid2>
        </Fragment>
      ))
    }
  </Grid2>)
}