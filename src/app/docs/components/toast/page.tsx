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

import { ToastPropsRowsConst } from "./constants";
import { Default } from "./examples/default";
import { Positions } from "./examples/positions";
import { Types } from "./examples/types";

const Toast = () => {
  const sourceUrl = getCompSourceUrl("Toast");
  const reportIssueUrl = getReportIssueUrl("Toast");
  const {
    default: defaultExampleCode,
    types: typesExampleCode,
    positions: positionsExampleCode,
  } = useExamplesPreviews({
    root: "components",
    compName: "toast",
    examplesTypes: ["default", "types", "positions"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Toast"
        description="A succinct message that is displayed temporarily."
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Toast")}
      />
      <ApisSection dataRows={ToastPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
        <ExamplePreview
          type="types"
          uiPreview={<Types />}
          code={typesExampleCode}
        />
        <ExamplePreview
          type="positions"
          uiPreview={<Positions />}
          code={positionsExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Toast;
