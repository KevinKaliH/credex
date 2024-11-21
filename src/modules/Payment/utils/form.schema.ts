import { ISelectValue } from "@/models/core/common.model";
import * as yup from "yup";

export function formSchema(
  existQuery: boolean,
  typeDocumentList: ISelectValue[]
) {
  return yup.object({
    targetNumber: yup
      .string()
      .required("La tarjeta de crédito es obligatorio")
      .test("no-spaces", "No se permiten espacios", (value) => {
        return !value || !/\s/.test(value);
      })
      .transform((value) => value.replace(/\s+/g, "")) // Eliminar espacios en blanco
      .matches(/^[0-9]+$/, "Solo se permiten números")
      .min(13, "El número debe tener al menos 13 dígitos")
      .max(19, "El número no puede tener más de 19 dígitos"),

    currencyId: yup.string().required("El tipo de la moneda es obligatorio"),

    docTypeId: yup.string().required("El tipo de documento es obligatorio"),

    documentValue: yup.string().when("docTypeId", (docTypeId: any, schema) => {
      const selectedDoc = typeDocumentList.find((i) => i.value == docTypeId);
      if (!selectedDoc)
        return schema.required("El valor del documento es obligatorio");

      return schema
        .matches(
          selectedDoc.data.regex,
          selectedDoc.data.errorMessage || "Valor de documento no válido"
        )
        .required("El valor del documento es obligatorio");
    }),

    firstName: yup.string().required("El nombre es obligatorio"),

    lastName: yup.string().required("El apellido es obligatorio"),

    valuePay: yup.lazy((_) => {
      return existQuery
        ? yup
            .number()
            .required("El valor de pago es obligatorio")
            .moreThan(0, "El valor debe ser mayor que 0")
        : yup.number().notRequired();
    }),
  });
}
