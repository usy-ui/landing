"use client";

import {
  Button,
  Flex,
  rootToast,
  Switch,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = { isApply: boolean };

export const Form = () => {
  const { control, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      isApply: false,
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
      <Flex
        justifyContent="space-between"
        alignItems="center"
        widthProps={{ width: "200px" }}
      >
        <Typography>Apply coupon</Typography>
        <Controller
          name="isApply"
          control={control}
          render={({ field }) => (
            <Switch {...field} name="form-apply" hasAsterisk />
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
