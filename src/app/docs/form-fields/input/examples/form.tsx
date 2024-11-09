"use client";
import { Button, Flex, Input, globalToast, usySpacing } from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = { name: string; email: string };

export const Form = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (values: FormFields) => {
    globalToast.basic({
      content: <CodeBlock {...getJsonPreset(values)} />,
      styles: ToastJsonStylesConst,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={usySpacing.px20}
        widthProps={{ width: "300px" }}
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="Name"
              hasError={Boolean(errors.name)}
              description={
                errors.name?.message || "Auto transform to uppercase"
              }
              transformOnChange={(value) => value.toUpperCase()}
              hasAsterisk
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="Email"
              hasError={Boolean(errors.email)}
              description={errors.email?.message}
              widthProps={{ width: "300px" }}
              hasAsterisk
            />
          )}
        />
        <Button type="submit" variant="primary" size="small">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
