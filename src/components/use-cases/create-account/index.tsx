"use client";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Panel,
  ParagraphHeading,
  Password,
  RadioGroup,
  RadioType,
  Select,
  SelectItemType,
  usySpacing,
} from "usy-ui";

import { Countries, Genders, ValidateRules } from "./constants";

type FormFieldsProps = {
  email: string;
  password: string;
  phoneNumber: string;
  gender: RadioType;
  country: SelectItemType;
  isAgreeTermAndCondition: boolean;
};

export const CreateAccount = () => {
  const {
    formState: { errors },
    control,
    watch,
    handleSubmit,
  } = useForm<FormFieldsProps>({
    defaultValues: {
      gender: Genders[0],
      country: Countries[0],
    },
  });

  const formSubmit = (values: FormFieldsProps) => {
    alert("Check the console tab on Developer tool to see the data");
    console.log("Create Account Form", values);
  };

  return (
    <Panel
      title={
        <ParagraphHeading
          title="Create Account"
          description="Enter your email below to create your account"
        />
      }
    >
      <form onSubmit={handleSubmit(formSubmit)}>
        <Flex
          direction="column"
          gap={usySpacing.px24}
          paddingProps={{ paddingTop: usySpacing.px10 }}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: ValidateRules.required,
              pattern: ValidateRules.emailPattern,
            }}
            render={({ field }) => (
              <Input
                label="Email"
                placeholder="Email"
                hasError={Boolean(errors.email)}
                description={errors.email?.message}
                hasAsterisk
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: ValidateRules.required,
              minLength: ValidateRules.passwordMinLength,
            }}
            render={({ field }) => (
              <Password
                label="Password"
                placeholder="Password"
                hasError={Boolean(errors.password)}
                description={errors.password?.message}
                hasAsterisk
                {...field}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <Input
                label="Phone number"
                placeholder="Phone number"
                formatOnChange={(value) =>
                  value.replace(/^[a-zA-Z\s.,'?!-]+$/, "")
                }
                {...field}
              />
            )}
          />
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <RadioGroup
                direction="horizontal"
                label="Gender"
                items={Genders}
                {...field}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select label="Country" items={Countries} {...field} />
            )}
          />
          <Controller
            name="isAgreeTermAndCondition"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Agree with Terms and Conditions"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Button
            type="submit"
            variant="primary"
            disabled={!watch("isAgreeTermAndCondition")}
            width="100%"
          >
            Create
          </Button>
        </Flex>
      </form>
    </Panel>
  );
};
