import { FC } from "react";

import { Flex, usySpacing } from "@usy-ui/base";

import { formatAmount } from "../../payment";

import { CoinBrief } from "./coin-brief";

type OverviewProps = {
  isFetching?: boolean;
};

export const Overview: FC<OverviewProps> = ({ isFetching }) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        gap={usySpacing.px20}
        wrap="wrap"
        marginProps={{ marginTop: usySpacing.px32 }}
      >
        <CoinBrief
          iconUrl="https://raw.githubusercontent.com/usy-ui/landing/6468696af27f5733577d5bc752468a3925e58c02/public/icons/btc.svg"
          coinCode="BTC"
          coinName="Bitcoin"
          bidPrice={formatAmount(59949.81, "$")}
          askPrice={formatAmount(59950.02, "$")}
          isLoading={isFetching}
        />
        <CoinBrief
          iconUrl="https://raw.githubusercontent.com/usy-ui/landing/6468696af27f5733577d5bc752468a3925e58c02/public/icons/eth.svg"
          coinCode="ETH"
          coinName="Ethereum"
          bidPrice={formatAmount(2419.4, "$")}
          askPrice={formatAmount(2420.3, "$")}
          isLoading={isFetching}
        />
        <CoinBrief
          iconUrl="https://raw.githubusercontent.com/usy-ui/landing/6468696af27f5733577d5bc752468a3925e58c02/public/icons/usdt.svg"
          coinCode="USDT"
          coinName="Tether"
          bidPrice={formatAmount(1.0, "$")}
          askPrice={formatAmount(1.05, "$")}
          isLoading={isFetching}
        />
        <CoinBrief
          iconUrl="https://raw.githubusercontent.com/usy-ui/landing/6468696af27f5733577d5bc752468a3925e58c02/public/icons/bnb.svg"
          coinCode="BNB"
          coinName="BNB"
          bidPrice={formatAmount(551.24, "$")}
          askPrice={formatAmount(551.28, "$")}
          isLoading={isFetching}
        />
        <CoinBrief
          iconUrl="https://raw.githubusercontent.com/usy-ui/landing/6468696af27f5733577d5bc752468a3925e58c02/public/icons/sol.svg"
          coinCode="SOL"
          coinName="Solana"
          bidPrice={formatAmount(137.41, "$")}
          askPrice={formatAmount(137.43, "$")}
          isLoading={isFetching}
        />
        <CoinBrief
          iconUrl="https://raw.githubusercontent.com/usy-ui/landing/6468696af27f5733577d5bc752468a3925e58c02/public/icons/xrp.svg"
          coinCode="XRP"
          coinName="XRP"
          bidPrice={formatAmount(0.5864, "$")}
          askPrice={formatAmount(0.5868, "$")}
          isLoading={isFetching}
        />
      </Flex>
    </>
  );
};
