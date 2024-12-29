/* eslint-disable react/no-unescaped-entities */
import {
  Alert,
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
          color="green"
          title="Charaday Worlds"
          icon={<IconInfoCircle />}
        >
          Excited to announce beta availability of <Link href="/charaday">Charaday Worlds</Link> - a new role-play AI beased app.
        </Alert>
<br/>
        <Alert
          variant="light"
          color="orange"
          title="Doghouse, where did you go?"
          icon={<IconInfoCircle />}
        >
          Looking for Doghouse? It's no longer maintained, but it was fun. Old
          website is still <Link href="/doghouse">here</Link> though.
        </Alert>
      </Container>
    </Container>
  );
}
