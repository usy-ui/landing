"use client";
import { ReactNode, useEffect, useState } from "react";

import Image from "next/image";
import {
  BarsFromLeftIcon,
  Box,
  Button,
  DollarIcon,
  Flex,
  InboxIcon,
  InfoCircleIcon,
  MapPinAltIcon,
  Panel,
  Popover,
  Separator,
  Switch,
  Toast,
  toastIns,
  Typography,
  UserIcon,
  usyColor,
  usySpacing,
} from "usy-ui";

export const formatAmount = (num: number, prefix?: string): string =>
  `${prefix || ""}${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

const renderRow = (row: {
  icon?: ReactNode;
  label: string | ReactNode;
  value: string | ReactNode;
}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex
        widthProps={{ maxWidth: "150px" }}
        display="inline-flex"
        alignItems="center"
      >
        {row.icon}
        &nbsp;&nbsp;
        {typeof row.label === "string" ? (
          <Typography weight="semibold">{row.label}</Typography>
        ) : (
          row.label
        )}
      </Flex>
      {typeof row.value === "string" ? (
        <Typography>{row.value}</Typography>
      ) : (
        row.value
      )}
    </Flex>
  );
};

const productPrice = 3400;
const productQuantity = 1;
const shippingAmount = 120;
const couponAmount = 50;

export const Payment = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [isAppliedCoupon, setIsAppliedCoupon] = useState(false);

  useEffect(() => {
    const totalAmount =
      productPrice * productQuantity +
      shippingAmount -
      (isAppliedCoupon ? couponAmount : 0);
    setTotalAmount(totalAmount);
  }, [isAppliedCoupon]);

  const renderCTA = () => {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap={usySpacing.px10}
      >
        <Button
          width="200px"
          variant="primary"
          size="small"
          radius="full"
          onClick={() => {
            toastIns.success({
              title: "Payment success",
              description: "Your item will be shipped within 2 days",
            });
          }}
        >
          Pay out
        </Button>
        <Button width="200px" variant="invisible" size="small" radius="full">
          Go back
        </Button>
      </Flex>
    );
  };

  const renderOrderDetails = () => {
    return (
      <Flex
        direction="column"
        gap={usySpacing.px6}
        marginProps={{ marginTop: usySpacing.px32 }}
      >
        {renderRow({
          icon: <UserIcon height={18} />,
          label: "Name",
          value: "Zac Harry",
        })}
        {renderRow({
          icon: <MapPinAltIcon height={18} />,
          label: "Address",
          value: "123 Brookly, Ohio",
        })}
        {renderRow({
          icon: <InboxIcon height={18} />,
          label: "Product",
          value: "Macbook Pro M3",
        })}
        {renderRow({
          icon: <DollarIcon height={18} />,
          label: "Price",
          value: formatAmount(productPrice, "$"),
        })}
        {renderRow({
          icon: <BarsFromLeftIcon height={18} />,
          label: "Quantity",
          value: "1",
        })}
      </Flex>
    );
  };

  const renderTotalAmount = () => {
    return (
      <Flex direction="column" marginProps={{ marginBottom: usySpacing.px32 }}>
        {renderRow({
          label: <Typography size="small">+ Shipping</Typography>,
          value: (
            <Typography size="small">
              {formatAmount(shippingAmount, "$")}
            </Typography>
          ),
        })}
        {renderRow({
          label: <Typography size="small">- Apply coupon</Typography>,
          value: (
            <Flex justifyContent="flex-end" alignItems="center">
              <Switch
                size="small"
                value={isAppliedCoupon}
                onChange={(value) => setIsAppliedCoupon(value)}
              />
              &nbsp;
              <Popover
                position="top-start"
                content={
                  <Box widthProps={{ minWidth: "200px" }}>
                    <Typography size="small">
                      You have a coupon{" "}
                      <Typography tag="strong">DKC50</Typography> equal to{" "}
                      <Typography tag="strong">
                        {formatAmount(couponAmount, "$")}
                      </Typography>
                    </Typography>
                  </Box>
                }
              >
                <InfoCircleIcon color={usyColor.dark4} />
              </Popover>
            </Flex>
          ),
        })}
        <br />
        {renderRow({
          label: <Typography size="huge">Total</Typography>,
          value: (
            <Typography size="huge" weight="bold">
              {formatAmount(totalAmount, "$")}
            </Typography>
          ),
        })}
      </Flex>
    );
  };

  return (
    <>
      <Toast />
      <Panel>
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Image
            src="/illustration.png"
            alt="Payment"
            width={150}
            height={150}
          />
          <Typography size="large" weight="semibold">
            Order Details
          </Typography>
          <Typography tag="em" size="small">
            Please check the below details
          </Typography>
        </Flex>
        {renderOrderDetails()}
        <Separator />
        {renderTotalAmount()}
        {renderCTA()}
      </Panel>
    </>
  );
};
