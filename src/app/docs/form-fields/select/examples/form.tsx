"use client";
import { useMemo } from "react";

import {
  Button,
  Flex,
  RadioType,
  rootToast,
  Select,
  usySpacing,
} from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = { option: RadioType };

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
      option: items[0],
    },
  });

  const onSubmit = (values: FormFields) => {
    console.log(values);

    rootToast.basic({
      content: <CodeBlock {...getJsonPreset(values)} />,
      styles: ToastJsonStylesConst,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="option"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label="Select item"
            items={items}
            widthProps={{ width: "260px" }}
            hasAsterisk
          />
        )}
      />
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
