import HeaderContainer from "@/shared/components/HeaderContainer";
import CardLinkTemplate from "@bill/components/CardLinkTemplate";
import ViewModalPdf from "@bill/components/ViewModalPdf";
import PaymentBillHelper from "@bill/helpers/PaymentBill.helper";
import { CARDS_LINKS } from "@bill/utils/const";
import PrintIcon from "@mui/icons-material/Print";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { EnumAppRoutes } from "@/shared/utils/urlPaths.utl";

const PaymentBill = () => {
  const { isVisibleModal, hideModal, showModal } = PaymentBillHelper();

  // if (!locationParams) return <Navigate to={EnumAppRoutes.search} replace={true} />;

  return (
    <div className="full-height d-flex flex-column">
      <HeaderContainer step={2}>
        <div className="text-sm-center text-left">
          <Button
            component={Link}
            replace={true}
            to={EnumAppRoutes.search}
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
          >
            Go to Home
          </Button>
        </div>
      </HeaderContainer>

      <div className="flex-1 h-100 d-flex flex-column align-items-center">
        <Box
          className="h-100 d-grid shadow-sm rounded-xs bg-white px-3 py-2 my-5 d-flex flex-column justify-content-center align-items-center"
          sx={{
            width: {
              sm: "500px",
            },
          }}
          style={{ maxHeight: "300px" }}
        >
          <div
            className="d-flex justify-content-center align-items-center rounded-circle p-2"
            style={{
              width: 110,
              height: 110,
              backgroundColor: "skyBlue",
            }}
          >
            <PrintIcon sx={{ fontSize: 50, color: "blue" }} />
          </div>
          <p className="mb-0">Transaccion finalizada</p>
          <p className="fw-bold text-blue fs-4 my-2">2024110120174439200d</p>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "50px" }}
            startIcon={<PrintIcon />}
            onClick={showModal}
          >
            COMPROBANTE
          </Button>
        </Box>

        <div className="d-flex flex-wrap gap-5 justify-content-center w-100 mb-3">
          {CARDS_LINKS.map((item, index) => (
            <CardLinkTemplate key={index.toString()} value={item} />
          ))}
        </div>
      </div>

      {isVisibleModal && (
        <ViewModalPdf
          urlPdf={
            "https://web.stanford.edu/class/cs142/lectures/StateManagement.pdf"
          }
          isVisiblePdf={isVisibleModal}
          hideModal={hideModal}
        />
      )}
    </div>
  );
};

export default PaymentBill;
