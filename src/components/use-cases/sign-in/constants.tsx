import { SelectItemType } from "usy-ui";

import {
  AustraliaFlag,
  CanadaFlag,
  JapanFlag,
  UnitedStateFlag,
  VietnamFlag,
} from "./flags";

export const ValidateRules = {
  required: {
    value: true,
    message: "This field is required",
  },
  emailPattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email address",
  },
  passwordMinLength: {
    value: 5,
    message: "Should have 5 characters at least",
  },
};

export const Countries: SelectItemType[] = [
  {
    id: "united-state",
    label: "United State",
    labelElement: (
      <>
        <UnitedStateFlag />
        &nbsp;&nbsp; United State
      </>
    ),
    value: "united-state",
  },
  {
    id: "canada",
    label: "Canada",
    labelElement: (
      <>
        <CanadaFlag />
        &nbsp;&nbsp; Canada
      </>
    ),
    value: "canada",
  },
  {
    id: "australia",
    label: "Australia",
    labelElement: (
      <>
        <AustraliaFlag />
        &nbsp;&nbsp; Australia
      </>
    ),
    value: "australia",
  },
  {
    id: "japan",
    label: "Japan",
    labelElement: (
      <>
        <JapanFlag />
        &nbsp;&nbsp; Japan
      </>
    ),
    value: "japan",
  },
  {
    id: "vietnam",
    label: "Viet Nam",
    labelElement: (
      <>
        <VietnamFlag />
        &nbsp;&nbsp; Viet Nam
      </>
    ),
    value: "vietnam",
  },
];
