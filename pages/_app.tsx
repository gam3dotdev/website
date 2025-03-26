import "@mantine/core/styles.css";
import Head from "next/head";
import { AppShell, Group, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import {
  IconLetterD,
  IconLetterE,
  IconLetterG,
  IconLetterA,
  IconLetterM,
  IconLetterV,
  IconNumber3,
  IconCircleDot,
  IconPoint,
} from "@tabler/icons-react";
import classes from "./app.module.css";
import Link from "next/link";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>GAM3.DEV</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>

      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header className={classes.background}>
          <Group c="white" h="100%" px="md" justify={"center"}>
            <Link href="/" className={classes.link}>
              <IconLetterG />
              <IconLetterA />
              <IconLetterM />
              <IconNumber3 />
              <IconPoint />
              <IconLetterD />
              <IconLetterE />
              <IconLetterV />
            </Link>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
