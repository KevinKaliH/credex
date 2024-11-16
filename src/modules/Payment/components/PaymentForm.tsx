import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import { CurrencyList, TypeDocumentList } from "../utils/const";
import PaymentFormHelper from "../helpers/PaymentForm.helper";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { CircularProgress, InputAdornment } from "@mui/material";
import { NumericFormatCustom } from "./InputMoney";
import { TextMaskCustom } from "./InputTextMask";
import InputTargetNumber from "./InputTargetNumber";

const PaymentForm = () => {
  const { form, onChangeDocTypeId } = PaymentFormHelper();

  return (
    <>
      <CardContainer icon={<FilterAltIcon style={{ color: 'white' }} />} title="Filtrar factura">
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
            <FormControl variant="filled" fullWidth sx={{ m: 1 }}>
              <TextField
                label='Numero de documento'
                name='documentValue'
                id='documentValue'
                value={form.values.documentValue}
                fullWidth
                variant='filled'
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.documentValue && Boolean(form.errors.documentValue)}
                helperText={form.touched.documentValue && form.errors.documentValue}
                slotProps={{
                  input: {
                    inputProps: {
                      mask: '###-######-###L'
                    },
                    inputComponent: TextMaskCustom as any
                  }
                }}
              />
            </FormControl>
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
            <FormControl fullWidth variant="filled" sx={{ m: 1 }}
              error={form.touched.currencyId && Boolean(form.errors.currencyId)}
            >
              <InputLabel id="currencyIdLabel">Tipo de moneda</InputLabel>
              <Select
                labelId="currencyIdLabel"
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
          startIcon={form.isSubmitting ? <CircularProgress size={18} /> : <SearchIcon />}
          disabled={form.isSubmitting}
          sx={{ m: 1 }}
        >
          BUSCAR
        </Button>
      </CardContainer>

      <CardContainer title='Datos de pago' icon={<MonetizationOnIcon style={{ color: 'white' }} />}>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField
                id="valuePay"
                name="valuePay"
                label="Monto a pagar"
                variant="filled"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.valuePay && Boolean(form.errors.valuePay)}
                helperText={form.touched.valuePay && form.errors.valuePay}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">C$</InputAdornment>,
                    inputComponent: NumericFormatCustom as any,
                  },
                }}
              />
            </FormControl>

          </Col>
        </Row>
      </CardContainer>
    </>
  );
};

export default PaymentForm;

const CardContainer = ({ children, icon, title }: any) => {
  return (
    <Container className="bg-white shadow-sm rounded px-4 py-3 mb-3">
      <div className="d-flex align-items-center mb-2">
        <div className="p-2 bg-primary" style={{ marginLeft: "-45px" }}>
          {icon}
        </div>
        <p className="text-uppercase text-primary fw-bolder m-0 ms-3">
          {title}
        </p>
      </div>

      {children}
    </Container>
  );
};

