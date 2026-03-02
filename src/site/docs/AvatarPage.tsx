import { Text } from '@lib/components/ui/typography';
import { Flex } from '@lib/components/layout';
import { Section, Example, PageHero, PropTable } from './DocLayout';
import { Avatar, AvatarImage, AvatarFallback } from '@lib/components/ui/avatar';

const avatarProps = [
    { name: 'src', type: 'string', default: '—', description: 'URL of the profile image.' },
    { name: 'fallback', type: 'string', default: '—', description: 'Text to show if image fails to load.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Overall size of the avatar.' },
];

export function AvatarPage() {
    return (
        <Flex direction="col" gap="xl">
            <PageHero
                badge="Components"
                title="Avatar"
                description="Avatars are used to represent people or entities with an image or initials."
            />

            <Section
                title="Circle Avatar"
                description="The default round avatar for user profiles."
            >
                <Example
                    title="Profile Image"
                    code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                >
                    <Flex gap="md" align="center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Flex direction="col" gap="none">
                            <Text weight="bold">Shadcn</Text>
                            <Text size="sm" variant="muted">Software Engineer</Text>
                        </Flex>
                    </Flex>
                </Example>

                <Example
                    title="Initials Fallback"
                    code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                >
                    <Flex gap="md" align="center">
                        <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Flex direction="col" gap="none">
                            <Text weight="bold">John Doe</Text>
                            <Text size="sm" variant="muted">Designer</Text>
                        </Flex>
                    </Flex>
                </Example>
            </Section>

            <Section title="Props">
                <PropTable props={avatarProps} />
            </Section>
        </Flex>
    );
}
