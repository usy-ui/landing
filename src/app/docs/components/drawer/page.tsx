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

import { DrawerPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Sides } from "./examples/sides";

const Drawer = () => {
  const sourceUrl = getCompSourceUrl("Drawer");
  const reportIssueUrl = getReportIssueUrl(
    "Drawer, DrawerHeader, DrawerFooter, DrawerContent"
  );
  const { default: defaultExampleCode, sides: sidesExampleCode } =
    useExamplesPreviews({
      root: "components",
      compName: "drawer",
      examplesTypes: ["default", "sides"],
    });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Drawer"
        description="An overlay panel that slides in from the side, providing accessible space for menus, options, or additional content "
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Drawer")}
      />
      <ApisSection dataRows={DrawerPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="variants"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
        <ExamplePreview
          type="sides"
          uiPreview={<Sides />}
          code={sidesExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Drawer;
