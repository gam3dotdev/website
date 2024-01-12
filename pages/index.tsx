/* eslint-disable react/no-unescaped-entities */
import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
  Image,
  Paper,
  Alert,
} from "@mantine/core";
import {
  IconUser,
  IconFileImport,
  IconBook,
  IconDatabase,
  IconPencil,
  IconStackFront,
  IconChargingPile,
  IconInfoCircle,
} from "@tabler/icons-react";
import classes from "./Welcome.module.css";
import NextImage from "next/image";
import { IconChartBar } from "@tabler/icons-react";
import { HowItWorks } from "../components/HowItWorks";
import characters from "../public/screenshots/characters.png";
import editCharacter from "../public/screenshots/editCharacter.png";
import lorebooks from "../public/screenshots/lorebooks.png";
import editLorebook from "../public/screenshots/editLorebook.png";
import stories from "../public/screenshots/stories.png";
import editStory from "../public/screenshots/editStory.png";

export const MOCKDATA = [
  {
    icon: IconUser,
    title: "* Create characters",
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
        Wrap scenarios, first messages, dialogues and lorebooks into{" "}
        <b>stories</b> and share across characters with a as few clicks as
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
        lorebooks, model instructions and more
      </>
    ),
  },
  {
    icon: IconBook,
    title: "Lorebooks",
    description: (
      <>
        Manage and share lorebooks across characters. Import and export
        lorebooks to <b>.csv or .json</b>
      </>
    ),
  },
  {
    icon: IconFileImport,
    title: "* Import and export",
    description: (
      <>
        Import and export characters to <i>.png</i> card format
      </>
    ),
  },
  {
    icon: IconChartBar,
    title: "* Statistics",
    description: <>Explore, analyze and compare existing chats</>,
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
        ta="center"
        fw={500}
        bg="var(--mantine-color-gray-1)"
      >
        Download latest (0.5.0) &nbsp;:&nbsp;
        <a href="https://github.com/gam3dotdev/website/releases/latest/download/Charaday-Setup-0.5.0.exe">
          Windows
        </a>
        &nbsp;|&nbsp;
        <a href="https://github.com/gam3dotdev/website/releases/latest/download/Charaday-0.5.0.dmg">
          Intel MacOS
        </a>
        &nbsp;|&nbsp;
        <a href="https://github.com/gam3dotdev/website/releases/latest/download/Charaday-0.5.0-arm64.dmg">
          Apple Silicon M1 M2 M3 MacOS
        </a>
      </Paper>

      <Paper
        withBorder
        shadow="sm"
        style={{ padding: 20 }}
        bg="var(--mantine-color-gray-1)"
        mt="md"
      >
        <Text size="md" className={classes.description}>
          An (unofficial)
        </Text>
        <Title className={classes.title}>Faraday companion app</Title>

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
            Charaday attaches and operates directly on Faraday database. It's
            unlikely to cause any problems, but if you are paranoid - please
            make a backup of your Faraday database before using Charaday.
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
            src={characters}
            alt="characters"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={editCharacter}
            alt="editCharacter"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={stories}
            alt="stories"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={editStory}
            alt="editStory"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={lorebooks}
            alt="lorebooks"
            fit="contain"
          />
          <Image
            width="500"
            component={NextImage}
            src={editLorebook}
            alt="editLorebook"
            fit="contain"
          />
        </SimpleGrid>
      </Paper>
    </Container>
  );
}
