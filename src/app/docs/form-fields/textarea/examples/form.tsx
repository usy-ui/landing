"use client";
import { Button, Flex, globalToast, TextArea, usySpacing } from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = { aboutMe: string };

export const Form = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      aboutMe: "",
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
      >
        <Controller
          name="aboutMe"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <TextArea
              {...field}
              label="About Me"
              hasError={Boolean(errors.aboutMe)}
              description={errors.aboutMe?.message}
              widthProps={{ width: "460px" }}
              heightProps={{ height: "160px" }}
              hasAsterisk
            />
          )}
        />
        <Button type="submit" variant="primary" size="small">
          Login
        </Button>
      </Flex>
    </form>
  );
};
