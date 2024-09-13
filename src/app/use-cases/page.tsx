import { Flex, usySpacing } from "usy-ui";

import { FAQ } from "@/components/use-cases/faq";
import { SignIn } from "@/components/use-cases/sign-in";

const UseCases = () => {
  return (
    <Flex gap={usySpacing.px32}>
      <Flex widthProps={{ width: "33.33%" }}>
        <SignIn />
      </Flex>
      <Flex widthProps={{ width: "33.33%" }}>
        <FAQ />
      </Flex>
      <Flex widthProps={{ width: "33.33%" }}>a</Flex>
    </Flex>
  );
};

export default UseCases;
