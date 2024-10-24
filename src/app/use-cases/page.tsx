import { Badge, Box, Button, Flex, Typography, usySpacing } from "@usy-ui/base";
import Link from "next/link";

import { Blog } from "@/components/use-cases/blog";
import { ContactForm } from "@/components/use-cases/contact-form";
import { CreateAccount } from "@/components/use-cases/create-account";
import { Crypto } from "@/components/use-cases/crypto";
import { FAQ } from "@/components/use-cases/faq";
import { Payment } from "@/components/use-cases/payment";
import { TeamMembers } from "@/components/use-cases/team-members";
import { fontOswald } from "@/constants/fonts.constants";

const UseCases = () => {
  return (
    <Box marginProps={{ marginBottom: "200px" }}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginProps={{ marginBottom: usySpacing.px64 }}
      >
        <Typography
          tag="h1"
          size="gigant-2"
          weight="bold"
          className={fontOswald.className}
        >
          Start your dream product
        </Typography>
        <Typography tag="h5" size="medium" weight="normal" color="dark-1">
          All components are ready for saving your time
        </Typography>
        <Typography tag="em" size="small">
          <Badge variant="filled" color="amber" size="small" radius="full">
            Notes
          </Badge>
          &nbsp; All components in the docs are implemented, but some of them
          are not documented.
        </Typography>
        <Flex
          justifyContent="center"
          gap={usySpacing.px20}
          marginProps={{ marginTop: usySpacing.px32 }}
        >
          <Link href="/docs">
            <Button variant="primary" size="small">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/usy-ui/base" target="_blank">
            <Button variant="outline" size="small">
              View Github
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        gap={usySpacing.px32}
        marginProps={{ marginBottom: usySpacing.px32 }}
      >
        <Flex direction="column" widthProps={{ width: "calc(66.66% + 32px)" }}>
          <Crypto />
          <Flex
            gap={usySpacing.px32}
            marginProps={{ marginTop: usySpacing.px32 }}
          >
            <Flex widthProps={{ width: "50%", minWidth: "300px" }}>
              <CreateAccount />
            </Flex>
            <Flex
              direction="column"
              gap={usySpacing.px32}
              widthProps={{ width: "50%", minWidth: "300px" }}
            >
              <Blog />
              <FAQ />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap={usySpacing.px32}
          widthProps={{ width: "33.33%", minWidth: "400px" }}
        >
          <TeamMembers />
          <Payment />
          <ContactForm />
        </Flex>
      </Flex>
    </Box>
  );
};

export default UseCases;
