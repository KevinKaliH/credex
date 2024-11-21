import { ISelectValue } from "@/models/core/common.model";

async function searchLoader() {
  const currencyList = (await getLocalFiles("currency.json")) as ISelectValue[];
  const typeDocumentList = (await getLocalFiles(
    "typeDocument.json"
  )) as ISelectValue[];

  return {
    currencyList,
    typeDocumentList,
  };
}

export default searchLoader;

export async function getLocalFiles(fileName: string) {
  const response = await fetch(`/utils/${fileName}`);
  return await response.json();
}
