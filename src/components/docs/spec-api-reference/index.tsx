import { FC } from "react";

import { PanelTitle, Table, TableColumnType, usySpacing } from "usy-ui";

import { SpecApiReferenceContainer } from "./spec-api-reference.styled";

export type PropsRowType = {
  propName: string;
  type: string;
  default: string;
};

type SpecApiReferenceProps = {
  description?: string;
  dataRows: PropsRowType[];
};

const propsColumns: TableColumnType<PropsRowType>[] = [
  {
    key: "propName",
    title: "Prop",
  },
  {
    key: "type",
    title: "Type",
  },
  {
    key: "default",
    title: "Default",
  },
];

export const SpecApiReference: FC<SpecApiReferenceProps> = ({
  description,
  dataRows,
}) => {
  return (
    <SpecApiReferenceContainer>
      <PanelTitle
        title="API Reference"
        description={description}
        size="extra-large"
        marginProps={{ marginBottom: usySpacing.px20 }}
      />
      <Table rowKey="propName" columns={propsColumns} dataRows={dataRows} />
    </SpecApiReferenceContainer>
  );
};
