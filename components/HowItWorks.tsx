/* eslint-disable react/no-unescaped-entities */
import { Container, Title, Accordion } from '@mantine/core'
import classes from './HowItWorks.module.css'

export function HowItWorks() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        How It Works
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="1">
          <Accordion.Control>
            <b>Why do I need this app?</b>
          </Accordion.Control>
          <Accordion.Panel>
            This app is a convenience to make editing Faraday characters easier. For example, if you have characters{' '}
            <i>Bob</i> and <i>Alice</i>, both using the same scenario (or first message, lorebook, etc) - you can edit
            that scenario once and both <i>Bob</i> and <i>Alice</i> characters will be updated.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="2">
          <Accordion.Control>
            <b>Can I use Faraday and Charaday at the same time?</b>
          </Accordion.Control>
          <Accordion.Panel>Preferably not. Close one, open the other, and vice versa.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="3">
          <Accordion.Control>
            <b>So where is all this data coming from?</b>
          </Accordion.Control>
          <Accordion.Panel>All the information is loaded directly from the local Faraday database</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="4">
          <Accordion.Control>
            <b>Does Charaday require Internet connection?</b>
          </Accordion.Control>
          <Accordion.Panel>No, it only requires Faraday to be installed on the same computer</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="5">
          <Accordion.Control>
            <b>Does Charaday upload any data?</b>
          </Accordion.Control>
          <Accordion.Panel>
            No, Charaday is not using any network at all. It's completely an offline app
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="6">
          <Accordion.Control>
            <b>Does Charaday store any data locally on its own?</b>
          </Accordion.Control>
          <Accordion.Panel>
            No, Charaday is not storing data, it uses faraday database as the source of truth
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="7">
          <Accordion.Control>
            <b>When I edit scenarios or duplicate characters, where do they go?</b>
          </Accordion.Control>
          <Accordion.Panel>Everything is saved back to Faraday database</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="8">
          <Accordion.Control>
            <b>Does Charaday use any AI or LLMs</b>
          </Accordion.Control>
          <Accordion.Panel>No, it's just a fancy SQL editor</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}
