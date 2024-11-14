import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import filterSvg from "../../../assets/filter.svg";
import searchSvg from "../../../assets/search.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const PaymentForm = () => {
  return (
    <Container className="bg-white shadow-sm rounded px-4 py-3 mb-5">
      <div className="d-flex align-items-center mb-2">
        <div className="p-2 bg-primary" style={{ marginLeft: "-45px" }}>
          <img src={filterSvg} width={30} height={40} />
        </div>
        <p className="text-uppercase text-primary fw-bolder m-0 ms-3">
          Filtrar facturas
        </p>
      </div>

      <Row>
        <Col xs={4}>
          <FloatingContainer label="Numero de tarjeta">
            <Form.Control type="text" placeholder="" />
          </FloatingContainer>
        </Col>
        <Col xs={4}>
          <FloatingContainer label="Tipo de documento">
            <Form.Control type="text" placeholder="" />
          </FloatingContainer>
        </Col>
        <Col xs={4}>
          <FloatingContainer label="Número de documento (con guiones)">
            <Form.Control type="text" placeholder="" />
          </FloatingContainer>
        </Col>

        <Col xs={4}>
          <FloatingContainer label="Primer nombre">
            <Form.Control type="text" placeholder="" />
          </FloatingContainer>
        </Col>

        <Col xs={4}>
          <FloatingContainer label="Primer apellido">
            <Form.Control type="text" placeholder="" />
          </FloatingContainer>
        </Col>
      </Row>

      <Button className="rounded-pill fw-semibold pe-3">
        <img src={searchSvg} width={20} height={20} className="me-2 mb-1" />
        BUSCAR
      </Button>
    </Container>
  );
};

export default PaymentForm;

const FloatingContainer = ({ children, label }: any) => (
  <FloatingLabel controlId="floatingTextarea" label={label} className="mb-3">
    {children}
  </FloatingLabel>
);
