"use client";
import { Flex, rootToast, Tags, usySpacing } from "@usy-ui/base";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

export const Default = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={usySpacing.px32}
    >
      <Tags
        label="Item tags"
        tags={["Item 1", "Item 2", "Item 3"]}
        onAdd={(tags, addedTags) =>
          rootToast.basic({
            content: <CodeBlock {...getJsonPreset({ tags, addedTags })} />,
            styles: ToastJsonStylesConst,
          })
        }
        onRemove={(tags, removedTags) =>
          rootToast.basic({
            content: <CodeBlock {...getJsonPreset({ tags, removedTags })} />,
            styles: ToastJsonStylesConst,
          })
        }
      />
    </Flex>
  );
};
