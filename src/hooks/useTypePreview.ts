import { readFile } from "@/utils";

export const useTypePreview = (type: string) => {
  const examplesCode = readFile(`./src/components/types/${type}.ts`);
  return examplesCode;
};
