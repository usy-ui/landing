import { readFile } from "@/utils";

export const useTypePreview = (type: string) => {
  const examplesCode = readFile(`./src/components/props-types/${type}.ts`);
  return examplesCode;
};
