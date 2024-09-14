import { Box, Flex, usySpacing } from "usy-ui";

import { Crypto } from "@/components/use-cases/crypto";
import { FAQ } from "@/components/use-cases/faq";
import { Payment } from "@/components/use-cases/payment";
import { SignIn } from "@/components/use-cases/sign-in";
import { TeamMembers } from "@/components/use-cases/team-members";

const UseCases = () => {
  return (
    <Box marginProps={{ marginBottom: "200px" }}>
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
            <Flex widthProps={{ width: "50%" }}>
              <SignIn />
            </Flex>
            <Flex widthProps={{ width: "50%" }}>
              <FAQ />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap={usySpacing.px32}
          widthProps={{ width: "33.33%" }}
        >
          <TeamMembers />
          <Payment />
        </Flex>
      </Flex>
    </Box>
  );
};

export default UseCases;
