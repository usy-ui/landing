import { Box, Flex, usySpacing } from "usy-ui";

import { Blog } from "@/components/use-cases/blog";
import { ContactForm } from "@/components/use-cases/contact-form";
import { CreateAccount } from "@/components/use-cases/create-account";
import { Crypto } from "@/components/use-cases/crypto";
import { Payment } from "@/components/use-cases/payment";
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
            <Flex widthProps={{ width: "50%", minWidth: "300px" }}>
              <CreateAccount />
            </Flex>
            <Flex widthProps={{ width: "50%", minWidth: "300px" }}>
              <Blog />
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
