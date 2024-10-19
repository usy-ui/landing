"use client";
import {
  Button,
  Checkbox,
  Flex,
  rootToast,
  usyColor,
  usyFontSize,
  usySpacing,
} from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock } from "@/components/common/codeblock";

type FormFields = { isAgree: boolean };

export const Form = () => {
  const { control, watch, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      isAgree: false,
    },
  });

  const isAgree = watch("isAgree");

  const onSubmit = (values: FormFields) => {
    rootToast.basic({
      content: (
        <CodeBlock
          language="json"
          code={JSON.stringify(values, null, 2)}
          showLineNumbers={false}
          fontSize={usyFontSize.small}
        />
      ),
      styles: {
        backgroundColor: usyColor.black,
        color: usyColor.white,
        border: "none",
        padding: `${usySpacing.px6} ${usySpacing.px14}`,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="isAgree"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} label="I agree with the terms and conditions" />
        )}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        marginProps={{ marginTop: usySpacing.px20 }}
      >
        <Button
          type="submit"
          variant="primary"
          size="small"
          disabled={!isAgree}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};
