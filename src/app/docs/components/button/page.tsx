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

import { ButtonPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Icons } from "./examples/icons";
import { Radius } from "./examples/radius";
import { Sizes } from "./examples/sizes";
import { Variants } from "./examples/variants";

const Button = () => {
  const sourceUrl = getCompSourceUrl("Button");
  const reportIssueUrl = getReportIssueUrl("Button");
  const {
    default: defaultExampleCode,
    variants: variantsExampleCode,
    sizes: sizesExampleCode,
    radius: radiusExampleCode,
    icons: iconsExampleCode,
  } = useExamplesPreviews({
    root: "components",
    compName: "button",
    examplesTypes: ["default", "variants", "sizes", "radius", "icons"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Button"
        description="Displays a button or a component that looks like a button."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Button")}
      />
      <ApisSection dataRows={ButtonPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="variants"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
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
          type="radius"
          uiPreview={<Radius />}
          code={radiusExampleCode}
        />
        <ExamplePreview
          type="icons"
          uiPreview={<Icons />}
          code={iconsExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Button;
