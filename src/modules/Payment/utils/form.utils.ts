export function touchedErrorTags(values: any, handleBlur: any) {
  Object.keys(values).forEach((field) => {
    handleBlur({ target: { name: field } });
  });
}
