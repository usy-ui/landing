"use client";
import {
  Button,
  Flex,
  Input,
  Panel,
  ParagraphHeading,
  Tags,
  TextArea,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useForm } from "react-hook-form";

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
    alert("Check the console tab on Developer tool to see the data");
    console.log("Contact Form", values);
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
          <Button type="submit" variant="primary" width="100%">
            Send
          </Button>
        </Flex>
      </form>
    </Panel>
  );
};
