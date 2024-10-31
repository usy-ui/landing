import {
  AccordionItemType,
  Badge,
  Box,
  Copyable,
  Flex,
  ParagraphHeading,
  Typography,
  usySpacing,
} from "@usy-ui/base";

export const QUESTIONS: AccordionItemType[] = [
  {
    id: "what-is-reactjs",
    title: "What is ReactJS?",
    isOpen: true,
    content: (
      <>
        <Typography>
          React.js is an open-source JavaScript library, crafted with precision
          by Facebook, that aims to simplify the intricate process of building
          interactive user interfaces. Imagine a user interface built with React
          as a collection of components, each responsible for outputting a
          small, reusable piece of HTML code.
        </Typography>
        <Box marginProps={{ marginTop: usySpacing.px20 }}>
          <ParagraphHeading title="Install" titleSize="medium" />
        </Box>
        <Copyable text="npm  i  react" widthProps={{ width: "180px" }} />
        <Box marginProps={{ marginTop: usySpacing.px20 }}>
          <ParagraphHeading title="Ecosystem" titleSize="medium" />
        </Box>
        <Flex wrap="wrap" gap={usySpacing.px8}>
          <Badge color="ruby">react-router</Badge>
          <Badge color="lime">react-hook-form</Badge>
          <Badge color="primary">redux</Badge>
          <Badge color="iris">redux-saga</Badge>
          <Badge color="bronze">redux-toolkit</Badge>
        </Flex>
      </>
    ),
  },
  {
    id: "advantages-of-reactjs",
    title: "What are the advantages of React.js ?",
    content: (
      <ul style={{ margin: "0", listStyleType: "circle" }}>
        <li>
          <Typography>It is composable</Typography>
        </li>
        <li>
          <Typography>It is declarative</Typography>
        </li>
        <li>
          <Typography>Write once, and learn anywhere</Typography>
        </li>
        <li>
          <Typography>Fast, efficient, and easy to learn</Typography>
        </li>
        <li>
          <Typography>It guarantees stable code</Typography>
        </li>
        <li>
          <Typography>It is backed by a strong community</Typography>
        </li>
      </ul>
    ),
  },
];
