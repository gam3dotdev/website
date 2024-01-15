import "@mantine/core/styles.css";
import Head from "next/head";
import { AppShell, Group, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { IconLetterC, IconLetterH, IconLetterA, IconLetterR, IconLetterD, IconLetterY } from "@tabler/icons-react";
import classes from './app.module.css'


export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>GAM3.DEV | C H A R A D A Y</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script async src="https://us.umami.is/script.js" data-website-id="a376ddde-feeb-4564-a9df-53c949953c7b"></script>
      </Head>

      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header className={classes.background}>
          <Group h="100%" px="md" justify={'center'}>
            <IconLetterC />
            <IconLetterH />
            <IconLetterA />
            <IconLetterR />
            <IconLetterA />
            <IconLetterD />
            <IconLetterA />
            <IconLetterY />
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
