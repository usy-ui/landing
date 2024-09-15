import { useState } from "react";

import Image from "next/image";
import {
  BarSkeleton,
  Box,
  Button,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Panel,
  Typography,
  usySpacing,
} from "usy-ui";

type RenderCoinBriefProps = {
  icon: string;
  coinCode: string;
  coinName: string;
  bidPrice: string;
  askPrice: string;
  isLoading?: boolean;
};

export const CoinBrief = ({
  icon,
  coinCode,
  coinName,
  bidPrice,
  askPrice,
  isLoading,
}: RenderCoinBriefProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderCoinData = () => {
    if (isLoading) {
      return (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          heightProps={{ height: "110px" }}
        >
          <BarSkeleton />
          <BarSkeleton />
          <BarSkeleton />
        </Flex>
      );
    }

    return (
      <>
        <Flex
          alignItems="center"
          marginProps={{ marginBottom: usySpacing.px4 }}
        >
          <Image src={`/icons/${icon}`} width={20} height={20} alt="XRP" />
          &nbsp;&nbsp;
          <Typography weight="semibold">{`${coinName}(${coinCode})`}</Typography>
        </Flex>
        <Box paddingProps={{ paddingLeft: usySpacing.px2 }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Typography size="small">Bid</Typography>
            <Typography size="small">{bidPrice}</Typography>
          </Flex>
          <Flex justifyContent="space-between">
            <Typography size="small">Ask</Typography>
            <Typography size="small">{askPrice}</Typography>
          </Flex>
        </Box>
        <Flex
          justifyContent="center"
          gap={usySpacing.px10}
          marginProps={{ marginTop: usySpacing.px14 }}
        >
          <Button
            variant="primary"
            size="tiny"
            noSole
            onClick={() => setIsOpen(true)}
          >
            Order
          </Button>
          <Button variant="outline" size="tiny" noSole>
            Detail
          </Button>
        </Flex>
      </>
    );
  };

  const renderDrawer = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <Drawer
        header={
          <DrawerHeader
            title="Order placement"
            onClose={() => setIsOpen(false)}
          />
        }
        footer={
          <DrawerFooter
            alignContent="center"
            buttons={[
              { children: "Cancel", variant: "outline" },
              { children: "Proceed", variant: "primary" },
            ]}
          />
        }
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          heightProps={{ height: "80%" }}
        >
          <Typography>
            Make an order placement for{" "}
            <Typography tag="strong">
              {coinName}({coinCode})
            </Typography>
          </Typography>
        </Flex>
      </Drawer>
    );
  };

  return (
    <>
      <Panel
        widthProps={{ width: "250px" }}
        heightProps={{ minHeight: "150px" }}
        paddingProps={{ padding: usySpacing.px18 }}
      >
        {renderCoinData()}
      </Panel>
      {renderDrawer()}
    </>
  );
};
