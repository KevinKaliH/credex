interface Props {
  children?: any;
  step: number;
}

const HeaderContainer = ({ children, step }: Props) => {
  return (
    <div className="bg-white px-3 py-1 border-bottom shadow-sm d-md-flex align-items-center justify-content-between">
      <div className="">
        <h3 className="fw-semibold text-blue">Pago de facturas</h3>
        <div className="d-flex align-items-center header-titles mb-1">
          {titles.map((title, i) => (
            <p
              key={i}
              className={
                "mb-0 text-uppercase " +
                (step == i ? "text-blue" : "text-muted2")
              }
            >
              {title}
            </p>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeaderContainer;

const titles = ["SERVICIO", "Buscar Factura", "recibo"];
