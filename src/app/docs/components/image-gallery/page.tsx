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
import { useExamplesPreviews } from "@/hooks/useExamplesPreview";

import { ImageGalleryPropsRowsConst } from "./constants";
import { Default } from "./examples/default";

const ImageGallery = () => {
  const sourceUrl = getCompSourceUrl("ImageGallery");
  const reportIssueUrl = getReportIssueUrl("ImageGallery");
  const { default: defaultExampleCode } = useExamplesPreviews({
    root: "components",
    compName: "image-gallery",
    examplesTypes: ["default"],
  });

  return (
    <>
      <OverviewSection
        name="ImageGallery"
        description="Display and organize images in a responsive, grid-based gallery"
        viewSourceUrl={sourceUrl}
        reportAnIssueUrl={reportIssueUrl}
        importCommand={getImportCommand("ImageGallery")}
      />
      <ApisSection dataRows={ImageGalleryPropsRowsConst} />
      <ExamplesSection>
        <ExamplePreview
          type="default"
          uiPreview={<Default />}
          code={defaultExampleCode}
        />
      </ExamplesSection>
    </>
  );
};

export default ImageGallery;
