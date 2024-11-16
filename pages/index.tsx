/* eslint-disable react/no-unescaped-entities */
import {
  Alert,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { IconCheckbox, IconInfoCircle, IconSquare } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./app.module.css";

export default function IndexPage() {
  return (
    <Container>
      <Container mt="lg">
        <Alert
          variant="light"
          color="orange"
          title="Doghouse, where did you go?"
          icon={<IconInfoCircle />}
        >
          Looking for Doghouse? It's no longer maintained, but it was fun. Old
          website is still <Link href="/doghouse">here</Link> though.
        </Alert>

        <Paper
          withBorder
          shadow="sm"
          style={{ padding: 20 }}
          bg="var(--mantine-color-gray-1)"
          mt="md"
        >
          <Title className={classes.title}>What's next?</Title>
          <Divider mt="20" mb="20" />
          <Text>
            <b>&gt; Pause. Think. What do I want from (e)RP?</b>
          </Text>
          <Text fs="italic">
            - Persistent worlds. Encounters. Stories. Characters that can
            remember
          </Text>
          <Text fs="italic">
            - (e)RP with multiple characters, add and remove characters as the
            story unfolds
          </Text>
          <Text fs="italic">
            - Easily mix and match characters/users personas, scenarios, lore
          </Text>
          <Text fs="italic">
            - No databases and such, just plain text files, (well maybe JSON).
          </Text>
        </Paper>

        <Paper
          withBorder
          shadow="sm"
          style={{ padding: 20 }}
          bg="var(--mantine-color-gray-1)"
          mt="md"
        >
          <Title className={classes.title}>How's it going so far?</Title>

          <Divider mt="20" mb="20" />
          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Summarize chat, save as long term memories</Text>
          </Group>
          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Append memories to the chat context</Text>
          </Group>

          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Or use memory entries dynamically (RAG style) </Text>
          </Group>

          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Suggest user's input (Impersonate) </Text>
          </Group>

          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Use Kobold as a backend</Text>
          </Group>

          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Save/Load/Delete chats. Edit chat messages</Text>
          </Group>

          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Character Library</Text>
          </Group>
          <Group>
            <IconCheckbox size={16} color="green" />
            <Text>Worlds and Encounters</Text>
          </Group>
          <Group>
            <IconSquare size={16} color="green" />
            <Text>Lorebooks</Text>
          </Group>
          <Group>
            <IconSquare size={16} color="green" />
            <Text>Add/remove/edit worlds and encounters in them</Text>
          </Group>
          <Group>
            <IconSquare size={16} color="green" />
            <Text>Add/remove/edit characters</Text>
          </Group>
        </Paper>

        <Paper
          withBorder
          shadow="sm"
          style={{ padding: 20 }}
          bg="var(--mantine-color-gray-1)"
          mt="md"
        >
          <Title className={classes.title}>Um, can I try it?</Title>
          <Divider mt="20" mb="20" />
          <Text>
            Well, I have not decided yet. But I'm thinking about something along
            the lines of:
          </Text>
          <Text>
            <b>- invite only club for hardcore (e)RPers</b>
          </Text>
          <Text>
            <b>- 100% private, offline only, non-commercial</b>
          </Text>
          <Divider mt="20" mb="20" />
          <Text>
            If you got this far, come chat in my{" "}
            <Link href="https://discord.gg/uzSX9fNa">Discord</Link>
          </Text>
        </Paper>
      </Container>
    </Container>
  );
}
