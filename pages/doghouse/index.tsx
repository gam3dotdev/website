/* eslint-disable react/no-unescaped-entities */
import {
  Alert,
  Container,
  Divider,
  Image,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import {
  IconBook,
  IconChartBubble,
  IconDatabase,
  IconFileImport,
  IconInfoCircle,
  IconPencil,
  IconUser,
} from "@tabler/icons-react";
import NextImage from "next/image";
import { HowItWorks } from "../../components/HowItWorks";
import s1 from "../../public/screenshots/1.png";
import s2 from "../../public/screenshots/2.png";
import s3 from "../../public/screenshots/3.png";
import s4 from "../../public/screenshots/4.png";
import s5 from "../../public/screenshots/5.png";
import s6 from "../../public/screenshots/6.png";
import s7 from "../../public/screenshots/7.png";
import s8 from "../../public/screenshots/8.png";
import s9 from "../../public/screenshots/9.png";
import classes from "./Welcome.module.css";

export const MOCKDATA = [
  {
    icon: IconUser,
    title: "Create characters",
    description: (
      <>
        Easily create new characters from scratch by assembling from existing
        building blocks:{" "}
        <b>personas, stories, lorebooks, model instructions and more</b>
      </>
    ),
  },
  {
    icon: IconPencil,
    title: "Stories",
    description: (
      <>
        Combine scenarios, first messages, dialogues and lorebooks into{" "}
        <b>stories</b> and share across characters with as few clicks as
        possible
      </>
    ),
  },
  {
    icon: IconDatabase,
    title: "Manage your data",
    description: (
      <>
        Easily edit, duplicate and organize characters, personas, scenarios,
        lorebooks, chats, model instructions and more
      </>
    ),
  },
  {
    icon: IconBook,
    title: "Lorebooks",
    description: (
      <>
        Manage and share lorebooks across characters. Import and export
        lorebooks to <b>.csv or .json</b>. Supports SillyTavent/agnai and plain
        text formats
      </>
    ),
  },
  {
    icon: IconFileImport,
    title: "Model instructions",
    description: (
      <>
        Bootstrap your character cards by using a curated library of{" "}
        <b>model instructions</b>
      </>
    ),
  },
  {
    icon: IconChartBubble,
    title: "Chats",
    description: <>Search, duplicate, rename and branch existing chats</>,
  },
];

interface ItemProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Item({ icon: Icon, title, description }: ItemProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Title order={4} mt="lg">
        {title}
      </Title>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export default function IndexPage() {
  const features = MOCKDATA.map((feature, index) => (
    <Item {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Paper
        withBorder
        shadow="sm"
        style={{ padding: 20 }}
        bg="var(--mantine-color-gray-1)"
        mt="md"
      >
        <Title className={classes.title}>Doghouse</Title>
        <Text size="md" className={classes.description}>
          A no longer maintained, unofficial, BackyardAI companion app
        </Text>
        <Divider m={20} />
        <Container size={560} p={0}>
          <Text size="md" className={classes.description}>
            Seamlessly manage characters, scenarios, and more.
          </Text>
        </Container>

        <Container size={560} mt="lg">
          <Alert
            variant="light"
            color="orange"
            title="Disclaimer"
            icon={<IconInfoCircle />}
          >
            Doghouse attaches and operates directly on Backyard database. It's
            unlikely to cause any problems, but if you are paranoid - please
            make a backup of your Backyard database before using Doghouse.
          </Alert>
        </Container>

        <SimpleGrid
          mt={60}
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: "xl", md: 50 }}
          verticalSpacing={{ base: "xl", md: 50 }}
        >
          {features}
        </SimpleGrid>

        <Text size="sm" className={classes.description} mt="md">
          <i>* under development</i>
        </Text>
      </Paper>

      <Paper
        withBorder
        shadow="sm"
        style={{ padding: 20 }}
        mt="md"
        bg="var(--mantine-color-gray-1)"
      >
        <HowItWorks />
      </Paper>

      <Paper
        withBorder
        shadow="sm"
        style={{ padding: 20 }}
        mt="md"
        bg="var(--mantine-color-gray-1)"
      >
        <Title className={classes.title}>Screenshots</Title>
        <SimpleGrid>
          <Image
            width="500"
            component={NextImage}
            src={s1}
            alt="characters"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s2}
            alt="editCharacter"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s3}
            alt="stories"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s4}
            alt="editStory"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s5}
            alt="lorebooks"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s6}
            alt="editLorebook"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s7}
            alt="editLorebook"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s8}
            alt="editLorebook"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={s9}
            alt="editLorebook"
            fit="contain"
          />
        </SimpleGrid>
      </Paper>
    </Container>
  );
}
