"use client";
import {
  Button,
  Flex,
  Input,
  Password,
  rootToast,
  usyColor,
  usyFontSize,
  usySpacing,
} from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock } from "@/components/common/codeblock";

type FormFields = { username: string; password: string };

export const Form = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

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
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={usySpacing.px20}
      >
        <Controller
          name="username"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+$/,
              message: "Should contains letters, numbers, (-), (_), and (.)",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="Username"
              hasError={Boolean(errors.username)}
              description={errors.username?.message}
              widthProps={{ width: "300px" }}
              hasAsterisk
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <Password
              {...field}
              label="Password"
              hasError={Boolean(errors.password)}
              description={errors.password?.message}
              widthProps={{ width: "300px" }}
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
