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

import { ModalPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const Modal = () => {
  const sourceUrl = getCompSourceUrl("Modal");
  const reportIssueUrl = getReportIssueUrl("Modal");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "modal",
    examplesTypes: ["default"],
  });

  /**
   * Render
   */

  return (
    <>
      <OverviewSection
        name="Modal"
        description="A centered overlay window that highlights critical information or actions"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("Modal")}
      />
      <ApisSection dataRows={ModalPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="variants"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default Modal;
