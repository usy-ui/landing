import { readFile } from "@/utils";

export const useTypePreview = (type: string) => {
  const examplesCode = readFile(
    `./src/components/docs/docs-content/apis-section/props-types/${type}.ts`
  );
  return examplesCode;
};
