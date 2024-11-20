import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import { CurrencyList, TypeDocumentList } from "@payment/utils/const";
import PaymentFormHelper from "@payment/helpers/PaymentForm.helper";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

import { NumericFormatCustom } from "@payment/components/InputMoney";
import { TextMaskCustom } from "@payment/components/InputTextMask";
import InputTargetNumber from "@payment/components/InputTargetNumber";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ActionFormButtons from "@payment/components/ActionFormButtons";

const PaymentForm = () => {
  const {
    form,
    existClient,
    isSearching,
    searchResult,
    maskDocument,
    visibleAlert,
    currencyPrefix,
    onChangeDocTypeId,
    onClickSearchLocal,
  } = PaymentFormHelper();

  return (
    <>
      <CardContainer
        icon={<FilterAltIcon style={{ color: "white" }} />}
        title="Filtrar factura"
      >
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <InputTargetNumber />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <FormControl
              fullWidth
              variant="filled"
              sx={{ m: 1 }}
              error={form.touched.docTypeId && Boolean(form.errors.docTypeId)}
            >
              <InputLabel id="docTypeId">Tipo de documento</InputLabel>
              <Select
                disabled={searchResult.recordExist}
                id="docTypeId"
                name="docTypeId"
                labelId="docTypeId"
                value={form.values.docTypeId ?? ""}
                onChange={onChangeDocTypeId}
                onBlur={form.handleBlur}
              >
                {TypeDocumentList.map((value) => (
                  <MenuItem key={value.value} value={value.value}>
                    {value.label}
                  </MenuItem>
                ))}
              </Select>
              {form.touched.docTypeId && form.errors.docTypeId && (
                <FormHelperText>{form.errors.docTypeId}</FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <FormControl variant="filled" fullWidth sx={{ m: 1 }}>
              <TextField
                disabled={existClient}
                label="Número de documento"
                name="documentValue"
                id="documentValue"
                value={form.values.documentValue}
                fullWidth
                variant="filled"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={
                  form.touched.documentValue &&
                  Boolean(form.errors.documentValue)
                }
                helperText={
                  form.touched.documentValue && form.errors.documentValue
                }
                slotProps={{
                  input: {
                    inputProps: {
                      mask: maskDocument,
                    },
                    inputComponent: TextMaskCustom as any,
                  },
                }}
              />
            </FormControl>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField
                disabled={existClient}
                id="firstName"
                name="firstName"
                label="Primer nombre"
                variant="filled"
                value={form.values.firstName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.firstName && Boolean(form.errors.firstName)}
                helperText={form.touched.firstName && form.errors.firstName}
              />
            </FormControl>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField
                disabled={existClient}
                fullWidth
                id="lastName"
                name="lastName"
                label="Primer apellido"
                variant="filled"
                value={form.values.lastName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.lastName && Boolean(form.errors.lastName)}
                helperText={form.touched.lastName && form.errors.lastName}
              />
            </FormControl>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <FormControl
              fullWidth
              variant="filled"
              sx={{ m: 1 }}
              error={form.touched.currencyId && Boolean(form.errors.currencyId)}
            >
              <InputLabel id="currencyIdLabel">Tipo de moneda</InputLabel>
              <Select
                disabled={existClient}
                labelId="currencyIdLabel"
                id="currencyId"
                name="currencyId"
                value={form.values.currencyId ?? ""}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                {CurrencyList.map((value) => (
                  <MenuItem key={value.value} value={value.value}>
                    {value.label}
                  </MenuItem>
                ))}
              </Select>
              {form.touched.currencyId && form.errors.currencyId && (
                <FormHelperText>{form.errors.currencyId}</FormHelperText>
              )}
            </FormControl>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Button
              variant="contained"
              startIcon={
                isSearching ? <CircularProgress size={18} /> : <SearchIcon />
              }
              disabled={isSearching || existClient}
              onClick={onClickSearchLocal}
              sx={{
                m: 1,
                borderRadius: "50px",
              }}
            >
              BUSCAR
            </Button>
          </div>
          <div className="col text-end">
            <ActionFormButtons />
          </div>
        </div>
      </CardContainer>

      <Collapse in={visibleAlert}>
        <CardContainer
          displayTitle={false}
          title="Resultado busqueda"
          icon={<ContentPasteSearchIcon style={{ color: "white" }} />}
        >
          {!searchResult.recordExist ? (
            <Alert severity="error">No se encontraron resultados</Alert>
          ) : (
            <CardContent className="my-0 p-3 pt-0">
              <Typography variant="h5" component="div">
                Client: {searchResult.client}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {searchResult.message}
              </Typography>
            </CardContent>
          )}
        </CardContainer>
      </Collapse>

      <Collapse in={existClient}>
        <CardContainer
          title="Datos de pago"
          icon={<MonetizationOnIcon style={{ color: "white" }} />}
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  id="valuePay"
                  name="valuePay"
                  label="Monto a pagar"
                  variant="filled"
                  value={form.values.valuePay}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched.valuePay && Boolean(form.errors.valuePay)}
                  helperText={form.touched.valuePay && form.errors.valuePay}
                  slotProps={{
                    input: {
                      value: form.values.valuePay ?? "",
                      startAdornment: (
                        <InputAdornment position="start">
                          {currencyPrefix} $
                        </InputAdornment>
                      ),
                      inputComponent: NumericFormatCustom as any,
                    },
                  }}
                />
              </FormControl>
            </div>
          </div>
        </CardContainer>
      </Collapse>
    </>
  );
};

export default PaymentForm;

const CardContainer = ({ children, icon, title, displayIcon = true }: any) => {
  return (
    <div className="bg-white shadow-sm rounded px-4 py-3 mb-3 container">
      <div className="d-flex align-items-center">
        {displayIcon && (
          <div className="p-2 bg-blue" style={{ marginLeft: "-35px" }}>
            {icon}
          </div>
        )}
        <p className="text-uppercase text-blue fw-semibold m-0 ms-3">{title}</p>
      </div>

      {children}
    </div>
  );
};
