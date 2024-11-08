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
import { useExamplesPreviews } from "@/hooks/useExamplesPreviews";

import { DropdownMenuPropsRowsConst } from "./constants";
import { Positions } from "./examples/positions";

const DropdownMenu = () => {
  const sourceUrl = getCompSourceUrl("DropdownMenu");
  const reportIssueUrl = getReportIssueUrl(
    "DropdownMenu, DropdownMenuTrigger, DropdownMenuOverlay, DropdownMenuSeparator"
  );
  const { positions: positionsExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "dropdown-menu",
    examplesTypes: ["positions"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Dropdown Menu"
        description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("DropdownMenu")}
      />
      <ApisSection dataRows={DropdownMenuPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="positions"
          uiPreview={<Positions />}
          code={positionsExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default DropdownMenu;
