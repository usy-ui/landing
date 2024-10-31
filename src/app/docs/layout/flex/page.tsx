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

import { FlexPropsRowsConst } from "./constants";
import { AlignContent } from "./examples/align-content";
import { AlignItems } from "./examples/align-items";
import { Directions } from "./examples/directions";
import { JustifyContent } from "./examples/justify-content";
import { Wrap } from "./examples/wrap";

const Flex = () => {
  const sourceUrl = getCompSourceUrl("Flex");
  const reportIssueUrl = getReportIssueUrl("Flex");
  const {
    directions: directionsExampleCode,
    "justify-content": justifyContentExampleCode,
    "align-items": alignItemsExampleCode,
    "align-content": alignContentExampleCode,
    wrap: wrapExampleCode,
  } = useExamplesPreviews({
    root: "layout",
    compName: "flex",
    examplesTypes: [
      "directions",
      "justify-content",
      "align-items",
      "align-content",
      "wrap",
    ],
  });

  return (
    <>
      <OverviewSection
        name="Flex"
        description="Simplifies alignment and spacing with flexible row and column options for responsive design"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Flex")}
      />
      <ApisSection dataRows={FlexPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="directions"
          uiPreview={<Directions />}
          code={directionsExampleCode}
        />
        <ExamplePreview
          type="justify-content"
          uiPreview={<JustifyContent />}
          code={justifyContentExampleCode}
        />
        <ExamplePreview
          type="align-items"
          uiPreview={<AlignItems />}
          code={alignItemsExampleCode}
        />
        <ExamplePreview
          type="align-content"
          uiPreview={<AlignContent />}
          code={alignContentExampleCode}
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

export default Flex;
