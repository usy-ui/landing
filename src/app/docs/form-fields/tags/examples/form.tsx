"use client";
import { Button, Flex, globalToast, Tags, usySpacing } from "@usy-ui/base";
import { useForm, Controller } from "react-hook-form";

import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ToastJsonStylesConst } from "../../constants";

type FormFields = { tags: string[] };

export const Form = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      tags: ["Item 1", "Item 2", "Item 3"],
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
      <Controller
        name="tags"
        control={control}
        rules={{
          validate: (value) =>
            (value && value.length > 0) || "This field is required",
        }}
        render={({ field }) => (
          <Tags
            tags={field.value}
            label="Your tags"
            hasError={Boolean(errors.tags)}
            description={errors.tags?.message}
            widthProps={{ minWidth: "260px" }}
            onAdd={(tags) => field.onChange(tags)}
            onRemove={(tags) => field.onChange(tags)}
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
