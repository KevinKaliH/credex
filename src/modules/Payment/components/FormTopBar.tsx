const FormTopBar = ({ children }: any) => {
    return (
        <div className="bg-white px-3 py-1 border-bottom shadow-sm d-md-flex align-items-center justify-content-between">
            <div className="">
                <h3 className="fw-semibold text-primary">Pago de facturas</h3>
                <div className="d-flex gap-2 align-items-center">
                    <div className="bg-primary" style={{ width: '1px', height: '18px' }} />
                    <p className="mb-0 text-decoration-none text-uppercase text-primary">Buscar Factura</p>

                    <div className="bg-primary" style={{ width: '1px', height: '18px' }} />

                    <p className="mb-0 text-decoration-none text-uppercase text-muted">RECIBO</p>
                    <div className="bg-primary" style={{ width: '1px', height: '18px' }} />
                </div>
            </div>
            {children}
        </div>
    )
}

export default FormTopBar