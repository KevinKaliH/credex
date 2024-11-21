import { getLocalFiles } from "./search.loader";

async function billLoader() {
  return await getLocalFiles("links.json");
}

export default billLoader;
