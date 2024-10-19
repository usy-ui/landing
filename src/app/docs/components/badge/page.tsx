import { ApisSection } from "@/components/docs/docs-content/apis-section";
import {
  ExamplePreview,
  ExamplesSection,
} from "@/components/docs/docs-content/examples-section";
import { OverviewSection } from "@/components/docs/docs-content/overview-section";
import {
  getCompSourceUrl,
  getImportCommand,
  getReportIssueUrl,
} from "@/components/docs/docs-content/utils";
import { useExamplesPreviews } from "@/hooks/useExamplesPreview";

import { BadgePropsRowsConst } from "./constants";
import { Colors } from "./examples/colors";
import { Radius } from "./examples/radius";
import { Sizes } from "./examples/sizes";
import { Variants } from "./examples/variants";

const Badge = () => {
  const sourceUrl = getCompSourceUrl("Badge");
  const reportIssueUrl = getReportIssueUrl("Badge");
  const {
    variants: variantsExampleCode,
    sizes: sizesExampleCode,
    colors: colorsExampleCode,
    radius: radiusExampleCode,
  } = useExamplesPreviews({
    root: "components",
    compName: "badge",
    examplesTypes: ["variants", "sizes", "colors", "radius"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Badge"
        description="Displays a badge or a component that looks like a badge."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Badge")}
      />
      <ApisSection dataRows={BadgePropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="variants"
          uiPreview={<Variants />}
          code={variantsExampleCode}
        />
        <ExamplePreview
          type="sizes"
          uiPreview={<Sizes />}
          code={sizesExampleCode}
        />
        <ExamplePreview
          type="colors"
          uiPreview={<Colors />}
          code={colorsExampleCode}
        />
        <ExamplePreview
          type="radius"
          uiPreview={<Radius />}
          code={radiusExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Badge;
