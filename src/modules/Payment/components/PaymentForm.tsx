import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import filterSvg from "../../../assets/filter.svg";
import Container from "react-bootstrap/Container";

import InputTargetNumber from "./InputTargetNumber";
import InputTextMask from "./InputTextMask";

import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SearchIcon from '@mui/icons-material/Search';
import InputMoney from "./InputMoney";
import { useFormikContext } from "formik";

const PaymentForm = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardContainer srcImg={filterSvg} title='Filtrar factura'>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <InputTargetNumber />
            </Col>
            <Col xs={12} md={6} lg={4}>

              <FormControl fullWidth variant="filled" sx={{ m: 1 }}>
                <InputLabel id="docType">Tipo de documento</InputLabel>
                <Select
                  labelId="docType"
                  id="docType"
                  defaultValue={1}
                >
                  <MenuItem value={1}>Cédula de identidad</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <InputTextMask />
            </Col>

            <Col xs={12} md={6} lg={4}>
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  id="targetNumber"
                  label="Primer nombre"
                  variant="filled"
                />
              </FormControl>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  id="targetNumber"
                  label="Primer apellido"
                  variant="filled"
                />
              </FormControl>
            </Col>
          </Row>

          <Button type="submit" variant="contained" startIcon={<SearchIcon />} sx={{ m: 1 }}>
            BUSCAR
          </Button>
        </CardContainer>

        <CardContainer title='Datos de pago' srcImg={filterSvg}>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <FormControl fullWidth variant="filled" sx={{ m: 1 }}>
                <InputLabel id="typeCurrency">Tipo de moneda</InputLabel>
                <Select
                  labelId="typeCurrency"
                  id="typeCurrency"
                >
                  <MenuItem value={1}>Cordoba</MenuItem>
                  <MenuItem value={2}>Dolar</MenuItem>
                </Select>
              </FormControl>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <InputMoney />
            </Col>
          </Row>
        </CardContainer>
      </form>
    </>
  );
};

export default PaymentForm;

const CardContainer = ({ children, srcImg, title }: any) => {
  return <Container className="bg-white shadow-sm rounded px-4 py-3 mb-5">
    <div className="d-flex align-items-center mb-2">
      <div className="p-2 bg-primary" style={{ marginLeft: "-45px" }}>
        <img src={srcImg} width={25} />
      </div>
      <p className="text-uppercase text-primary fw-bolder m-0 ms-3">
        {title}
      </p>
    </div>

    {children}
  </Container>
}
