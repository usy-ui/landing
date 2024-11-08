import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  ExamplesSection,
  ExamplePreview,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
import {
  getCompSourceUrl,
  getImportCommand,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useExamplesPreviews } from "@/hooks/useExamplesPreviews";

import { TypographyPropsRowsConst } from "./constants";
import { Align } from "./examples/align";
import { Colors } from "./examples/colors";
import { Sizes } from "./examples/sizes";
import { Tags } from "./examples/tags";
import { Weight } from "./examples/weight";
import { Wrap } from "./examples/wrap";

const Typography = () => {
  const sourceUrl = getCompSourceUrl("Typography");
  const reportIssueUrl = getReportIssueUrl("Typography");
  const {
    tags: typographyTagsExampleCode,
    weight: typographyWeightExampleCode,
    colors: colorsExampleCode,
    sizes: sizesExampleCode,
    align: alignExampleCode,
    wrap: wrapExampleCode,
  } = useExamplesPreviews({
    root: "components",
    compName: "typography",
    examplesTypes: ["tags", "weight", "colors", "sizes", "align", "wrap"],
  });

  return (
    <>
      <OverviewSection
        name="Typography"
        description="A flexible component for managing text styles, sizes, and alignment, ensuring consistent and readable content across your interface."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Typography")}
      />
      <ApisSection dataRows={TypographyPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="tags"
          uiPreview={<Tags />}
          code={typographyTagsExampleCode}
        />
        <ExamplePreview
          type="weight"
          uiPreview={<Weight />}
          code={typographyWeightExampleCode}
        />
        <ExamplePreview
          type="colors"
          uiPreview={<Colors />}
          code={colorsExampleCode}
        />
        <ExamplePreview
          type="sizes"
          uiPreview={<Sizes />}
          code={sizesExampleCode}
        />
        <ExamplePreview
          type="align"
          uiPreview={<Align />}
          code={alignExampleCode}
        />
        <ExamplePreview
          type="wrap"
          uiPreview={<Wrap />}
          code={wrapExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Typography;
