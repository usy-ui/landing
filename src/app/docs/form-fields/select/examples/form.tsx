"use client";
import { useMemo } from "react";

import {
  Button,
  Flex,
  globalToast,
  Select,
  usySpacing,
  SelectItemType,
} from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = {
  selectOption: SelectItemType;
  autoCompleteOption: SelectItemType;
};

export const Form = () => {
  const items = useMemo(
    () => [
      { id: "item-1", label: "Item 1", value: "item-1" },
      { id: "item-2", label: "Item 2", value: "item-2" },
      { id: "item-3", label: "Item 3", value: "item-3" },
    ],
    []
  );

  const { control, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      selectOption: items[0],
      autoCompleteOption: items[0],
    },
  });

  const onSubmit = (values: FormFields) => {
    console.log(values);

    globalToast.basic({
      content: <CodeBlock {...getJsonPreset(values)} />,
      styles: ToastJsonStylesConst,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={usySpacing.px32}>
        <Controller
          name="selectOption"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              type="select"
              label="Select item"
              items={items}
              widthProps={{ width: "260px" }}
              hasAsterisk
            />
          )}
        />
        <Controller
          name="autoCompleteOption"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              type="autocomplete"
              label="Search item"
              items={items}
              widthProps={{ width: "260px" }}
              hasAsterisk
            />
          )}
        />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        marginProps={{ marginTop: usySpacing.px20 }}
      >
        <Button type="submit" variant="primary" size="small">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
