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
