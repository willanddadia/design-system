import { Alert } from '@lib/components/ui/alert';
import { Flex } from '@lib/components/layout';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
  {
    name: 'variant',
    type: "'default' | 'success' | 'warning' | 'destructive'",
    default: "'default'",
    description: 'Controls the color scheme and icon shown in the alert.',
  },
  {
    name: 'title',
    type: 'string',
    default: '—',
    description: 'Optional bold title rendered above the description.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'The alert description content.',
  },
];

export function AlertPage() {
  return (
    <Flex direction="col" gap="none">
      <PageHero
        badge="Feedback"
        title="Alert"
        description="Alerts convey important messages to the user. Pick the variant that matches the intent of the message."
      />

      <Section title="Variants" description="Each variant carries a meaningful icon automatically.">
        <Example
          title="default / success / warning / destructive"
          code={`<Alert variant="default" title="Info">This is an informational message.</Alert>
<Alert variant="success" title="Success">Changes saved successfully!</Alert>
<Alert variant="warning" title="Warning">Review settings before continuing.</Alert>
<Alert variant="destructive" title="Error">Something went wrong.</Alert>`}
        >
          <Flex direction="col" gap="sm">
            <Alert variant="default" title="Info">
              This is an informational message for the user.
            </Alert>
            <Alert variant="success" title="Success">
              Your changes have been saved successfully!
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your settings before continuing.
            </Alert>
            <Alert variant="destructive" title="Error">
              An error occurred while processing your request.
            </Alert>
          </Flex>
        </Example>
      </Section>

      <Section
        title="Without title"
        description="The title prop is optional — the alert works with description only."
      >
        <Example
          title="No title"
          code={`<Alert variant="success">Your changes have been saved.</Alert>`}
        >
          <Alert variant="success">Your changes have been saved.</Alert>
        </Example>
      </Section>

      <Section title="Closable" description="Alerts can be closed by providing an onClose callback.">
        <Example
          title="Closable Alert"
          code={`const [show, setShow] = useState(true);

{show && (
  <Alert variant="info" onClose={() => setShow(false)} title="Closable Alert">
    You can close this alert by clicking the X in the corner.
  </Alert>
)}`}
        >
          <Flex direction="col" gap="md">
            <Alert variant="default" onClose={() => { }} title="Closable Demo">
              This is a demonstration of a closable alert.
            </Alert>
          </Flex>
        </Example>
      </Section>

      <Section title="Props">
        <PropTable props={[
          ...props,
          {
            name: 'onClose',
            type: '() => void',
            default: '—',
            description: 'Callback triggered when the close button is clicked.',
          }
        ]} />
      </Section>
    </Flex>
  );
}
