const Unauthorized = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="shadow d-flex align-items-center p-5 w-auto card">
        <img
          src="https://agenciaenlinea.airpak.com.ni/img/logo-airpak.svg"
          alt="airpak"
          width={200}
          height={50}
        />

        <p className="h1 leading text-center">
          <i className="fa-solid fa-lock fa-sm"></i> Acceso denegado
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
