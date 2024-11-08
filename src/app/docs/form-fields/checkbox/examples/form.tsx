"use client";
import { Button, Checkbox, Flex, rootToast, usySpacing } from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = { isAgree: boolean };

export const Form = () => {
  const { control, watch, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      isAgree: false,
    },
  });

  const isAgree = watch("isAgree");

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
