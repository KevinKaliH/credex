import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import filterSvg from "../../../assets/filter.svg";
import Container from "react-bootstrap/Container";

import InputTargetNumber from "./InputTargetNumber";
import InputTextMask from "./InputTextMask";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import InputMoney from "./InputMoney";
import { CurrencyList, TypeDocumentList } from "../utils/const";
import PaymentFormHelper from "../helpers/PaymentForm.helper";

const PaymentForm = () => {
  const { form, onChangeDocTypeId } = PaymentFormHelper();

  return (
    <>
      <CardContainer srcImg={filterSvg} title="Filtrar factura">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <InputTargetNumber />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ m: 1 }}
              error={form.touched.docTypeId && Boolean(form.errors.docTypeId)}
            >
              <InputLabel id="docTypeId">Tipo de documento</InputLabel>
              <Select
                id="docTypeId"
                name="docTypeId"
                labelId="docTypeId"
                value={form.values.docTypeId ?? ''}
                onChange={onChangeDocTypeId}
                onBlur={form.handleBlur}
              >
                {TypeDocumentList.map((value) => (
                  <MenuItem key={value.value} value={value.value}>{value.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <InputTextMask />
          </Col>

          <Col xs={12} md={6} lg={4}>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField
                id="firstName"
                name="firstName"
                label="Primer nombre"
                variant="filled"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.firstName && Boolean(form.errors.firstName)}
                helperText={form.touched.firstName && form.errors.firstName}
              />
            </FormControl>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Primer apellido"
                variant="filled"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.lastName && Boolean(form.errors.lastName)}
                helperText={form.touched.lastName && form.errors.lastName}
              />
            </FormControl>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <FormControl fullWidth variant="filled" sx={{ m: 1 }}>
              <InputLabel id="currencyId">Tipo de moneda</InputLabel>
              <Select
                labelId="currencyId"
                id="currencyId"
                name='currencyId'
                value={form.values.currencyId ?? ''}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                {CurrencyList.map(value =>
                  <MenuItem key={value.value} value={value.value}>{value.label}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Col>
        </Row>

        <Button
          type="submit"
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{ m: 1 }}
        >
          BUSCAR
        </Button>
      </CardContainer>

      {/* <CardContainer title="Datos de pago" srcImg={filterSvg}>
        <Row>
          

          <Col xs={12} md={6} lg={4}>
            <InputMoney />
          </Col>
        </Row>
      </CardContainer> */}
    </>
  );
};

export default PaymentForm;

const CardContainer = ({ children, srcImg, title }: any) => {
  return (
    <Container className="bg-white shadow-sm rounded px-4 py-3 mb-5">
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
  );
};

// const SelectTypeDocument = () => {
//   const formik = useFormikContext<PaymentFormModel>();

//   const onChange = (e: SelectChangeEvent<number>) => {
//     formik.handleChange(e);
//     formik.setFieldValue('documentValue', '');
//   }

//   return
// }
