const FormInputsView = () => {
  return (
    <section id="viewData bg-primary">
      <div className="bg-white">
        <div className="border-bottom px-3 py-2">
          <p className="fw-semibold text-primary m-0">RESUMEN DE TRANSACCIÓN</p>
        </div>
        <div className="p-2">
          <p className="border-top">Total</p>
        </div>
      </div>

      <div className="bg-white mt-3">
        <p className="fw-semibold text-primary mx-3">SERVICIO A PAGAR</p>
      </div>
    </section>
  );
};

export default FormInputsView;
