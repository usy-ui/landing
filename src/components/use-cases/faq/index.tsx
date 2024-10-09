import {
  Panel,
  ParagraphHeading,
  Scrollable,
  TogglePanel,
  Typography,
  usySpacing,
} from "@usy-ui/base";

export const FAQ = () => {
  return (
    <Panel title={<ParagraphHeading title="FAQ" />}>
      <Scrollable heightProps={{ maxHeight: "400px" }} showScrollOnHover>
        <TogglePanel title="What is Bitcoin?" expand>
          <Typography>
            Bitcoin (BTC) is a cryptocurrency (a virtual currency) designed to
            act as money and a form of payment outside the control of any one
            person, group, or entity. This removes the need for trusted
            third-party involvement (e.g., a mint or bank) in financial
            transactions.
          </Typography>
          <br />
          <Typography>
            Bitcoin was introduced to the public in 2009 by an anonymous
            developer or group of developers using the name Satoshi Nakamoto. It
            has since become the most well-known and largest cryptocurrency in
            the world. Its popularity has inspired the development of many other
            cryptocurrencies.
          </Typography>
        </TogglePanel>
        <TogglePanel
          title="What is Ethereum"
          marginProps={{ marginTop: usySpacing.px20 }}
        >
          <Typography>
            Ethereum is a network of computers all over the world that follow a
            set of rules called the Ethereum protocol. The Ethereum network acts
            as the foundation for communities, applications, organizations and
            digital assets that anyone can build and use.
          </Typography>
          <br />
          <Typography>
            You can create an Ethereum account from anywhere, at any time, and
            explore a world of apps or build your own. The core innovation is
            that you can do all this without trusting a central authority that
            could change the rules or restrict your access.
          </Typography>
        </TogglePanel>
      </Scrollable>
    </Panel>
  );
};
