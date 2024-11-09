import { Typography } from "@usy-ui/base";

import { APIsSectionRowType } from "@/components/docs/docs-content/apis-section/apis-section.types";
import {
  CommonCompPropsConst,
  FrequentlyUsedProps,
} from "@/components/docs/docs-content/apis-section/constants";
import { PropsTypesConst } from "@/components/docs/docs-content/apis-section/props-types/constants";
import { TypesPreview } from "@/components/docs/docs-content/apis-section/types-preview";

export const ToastPropsRowsConst: APIsSectionRowType[] = [
  {
    propName: "position",
    required: false,
    type: (
      <TypesPreview type={PropsTypesConst.BasePositionExtraUnion}>
        {PropsTypesConst.BasePositionExtraUnion}
      </TypesPreview>
    ),
    defaultVal: "top-end",
  },
  FrequentlyUsedProps.containerElement(),
  {
    propName: "children",
    required: false,
    type: (
      <>
        <Typography size="small">{`(props: { selfToast:  `}</Typography>
        <TypesPreview type={PropsTypesConst.ToastInstance}>
          {PropsTypesConst.ToastInstance}
        </TypesPreview>
        <Typography size="small">{` }) => ReactNode`}</Typography>
      </>
    ),
    defaultVal: "",
  },
  CommonCompPropsConst.className(),
  CommonCompPropsConst.name("toast"),
  CommonCompPropsConst.testId("toast"),
];
