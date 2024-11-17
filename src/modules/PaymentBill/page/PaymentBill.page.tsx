import HeaderContainer from "@/shared/components/HeaderContainer";
import { CARDS_LINKS, ILink } from "@bill/utils/const";
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";

const PaymentBill = () => {
  const renderItem = (item: ILink, index: number) => (
    <CardLinkTemplate key={index.toString()} value={item} />
  );

  return (
    <div className="full-height d-flex flex-column">
      <HeaderContainer step={2}></HeaderContainer>

      <div className="flex-1 h-100 d-flex flex-column align-items-center">
        <div
          className="h-100 d-grid shadow-sm rounded-xs bg-white px-3 py-2 my-5 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "500px", maxHeight: "300px" }}
        >
          <div
            className="d-flex justify-content-center align-items-center rounded-circle p-2"
            style={{
              width: 110,
              height: 110,
              backgroundColor: "skyBlue",
            }}
          >
            <PrintIcon sx={{ fontSize: 50, color: "blue" }} />{" "}
            {/* Icon with white color */}
          </div>
          <p className="mb-0">Transaccion finalizada</p>
          <p className="fw-bold text-primary fs-4 my-2">2024110120174439200d</p>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "50px" }}
            startIcon={<PrintIcon />}
          >
            COMPROBANTE
          </Button>
        </div>

        <div className="d-flex flex-wrap gap-5 justify-content-center w-100 mb-3">
          {CARDS_LINKS.map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default PaymentBill;

const CardLinkTemplate = ({ value }: { value: ILink }) => {
  return (
    <div
      className="d-grid shadow-sm rounded-xs bg-white px-3 py-2"
      style={{ width: "220px" }}
    >
      <div
        className="rounded-circle p-4"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: value.fill,
          boxSizing: "content-box",
          justifySelf: "center",
        }}
      >
        <img src={value.icon} className="w-100 h-100" />
      </div>
      <a
        href={value.link}
        className="my-3 btn btn-primary d-block border-0 rounded-pill p-0 text-uppercase fw-semibold"
        role="button"
      >
        Realizar
      </a>
      <p className="text-center text-uppercase fw-semibold fs-6 mb-0">
        {value.label}
      </p>
    </div>
  );
};
