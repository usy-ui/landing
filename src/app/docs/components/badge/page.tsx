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
import { Color } from "./examples/color";
import { Radius } from "./examples/radius";
import { Size } from "./examples/size";
import { Variant } from "./examples/variant";

const Badge = () => {
  const sourceUrl = getCompSourceUrl("Badge");
  const reportIssueUrl = getReportIssueUrl("Badge");
  const {
    variant: variantExampleCode,
    size: sizeExampleCode,
    color: colorExampleCode,
    radius: radiusExampleCode,
  } = useExamplesPreviews({
    component: "badge",
    types: ["variant", "size", "color", "radius"],
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
          type="variant"
          uiPreview={<Variant />}
          code={variantExampleCode}
        />
        <ExamplePreview
          type="size"
          uiPreview={<Size />}
          code={sizeExampleCode}
        />
        <ExamplePreview
          type="color"
          uiPreview={<Color />}
          code={colorExampleCode}
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
