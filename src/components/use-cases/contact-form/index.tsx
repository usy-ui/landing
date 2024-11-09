"use client";
import {
  Button,
  Flex,
  Input,
  Panel,
  ParagraphHeading,
  globalToast,
  Tags,
  TextArea,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useForm } from "react-hook-form";

import { ToastJsonStylesConst } from "@/app/docs/form-fields/constants";
import { CodeBlock, getJsonPreset } from "@/components/common/codeblock";

import { ValidateRules } from "../create-account/constants";

type FormFieldsProps = {
  name: string;
  description: string;
  tags: string[];
};

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsProps>({
    defaultValues: {
      tags: ["technical", "operation"],
    },
  });

  const formSubmit = (values: FormFieldsProps) => {
    globalToast.basic({
      timeout: 7000,
      content: <CodeBlock {...getJsonPreset(values)} />,
      styles: ToastJsonStylesConst,
    });
  };

  return (
    <Panel
      title={
        <ParagraphHeading
          title="Contact Form"
          description="You will get a response within 2 days"
        />
      }
    >
      <form onSubmit={handleSubmit(formSubmit)}>
        <Flex direction="column" gap={usySpacing.px24}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: ValidateRules.required,
            }}
            render={({ field }) => (
              <Input
                label="Your name"
                hasError={Boolean(errors.name)}
                description={errors.name?.message}
                hasAsterisk
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{
              required: ValidateRules.required,
            }}
            render={({ field }) => (
              <TextArea
                label="Description"
                hasError={Boolean(errors.description)}
                description={errors.description?.message}
                heightProps={{ height: "150px" }}
                hasAsterisk
                {...field}
              />
            )}
          />
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <Tags
                label="Tags"
                tags={field.value}
                onAdd={field.onChange}
                onRemove={field.onChange}
              />
            )}
          />
          <Button
            type="submit"
            variant="primary"
            widthProps={{ width: "100%" }}
          >
            Send
          </Button>
        </Flex>
      </form>
    </Panel>
  );
};
