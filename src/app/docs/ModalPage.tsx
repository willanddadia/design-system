import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Flex } from '../components/Flex';
import { FullscreenModal, PopupModal, SideModal } from '../components/Modal';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const props = [
    { name: 'isOpen', type: 'boolean', default: '—', description: 'Controls whether the modal is visible.' },
    { name: 'onClose', type: '() => void', default: '—', description: 'Called when the backdrop or close button is clicked, or Escape is pressed.' },
    { name: 'title', type: 'string', default: '—', description: 'Title shown in the modal header.' },
    { name: 'variant', type: "'fullscreen' | 'popup' | 'side'", default: "'popup'", description: 'Layout variant (use the named exports instead for clarity).' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'Content inside the modal body.' },
];

export function ModalPage() {
    const [fullOpen, setFullOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);

    return (
        <div>
            <PageHero
                badge="Overlay"
                title="Modal"
                description="Three modal variants for different interaction contexts. All modals close on backdrop click and Escape key press."
            />

            <Section title="Variants" description="Import named exports to use a specific variant without passing the variant prop.">
                <Example
                    title="Popup / Fullscreen / Side"
                    code={`import { PopupModal, FullscreenModal, SideModal } from './components/Modal';

<Button onClick={() => setOpen(true)}>Open Popup</Button>
<PopupModal isOpen={open} onClose={() => setOpen(false)} title="Popup">
  <p>Center-screen modal for confirmations and quick actions.</p>
</PopupModal>`}
                >
                    <Flex gap="md" wrap>
                        <Button onClick={() => setPopupOpen(true)}>Open Popup Modal</Button>
                        <Button onClick={() => setFullOpen(true)} variant="secondary">Open Fullscreen Modal</Button>
                        <Button onClick={() => setSideOpen(true)} variant="outline">Open Side Modal</Button>
                    </Flex>
                </Example>
            </Section>

            <Section title="When to use each variant">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: 'PopupModal', desc: 'Confirmations, alerts, quick actions. Center of the screen, max width 2xl.' },
                        { name: 'FullscreenModal', desc: 'Immersive editing workflows or complex multi-step forms.' },
                        { name: 'SideModal', desc: 'Detail panels, navigation drawers, filter sidebars. Slides from the right.' },
                    ].map((m) => (
                        <div key={m.name} className="border-2 border-border rounded-xl p-5">
                            <p className="font-mono text-sm font-semibold text-primary mb-2">{m.name}</p>
                            <p className="text-sm text-muted-foreground">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Props">
                <PropTable props={props} />
            </Section>

            {/* Modals rendered */}
            <PopupModal isOpen={popupOpen} onClose={() => setPopupOpen(false)} title="Confirm Action">
                <div className="space-y-4">
                    <p>Are you sure you want to proceed? This action cannot be undone.</p>
                    <Flex gap="md" justify="end">
                        <Button variant="outline" onClick={() => setPopupOpen(false)}>Cancel</Button>
                        <Button onClick={() => setPopupOpen(false)}>Confirm</Button>
                    </Flex>
                </div>
            </PopupModal>

            <FullscreenModal isOpen={fullOpen} onClose={() => setFullOpen(false)} title="Fullscreen Modal">
                <div className="space-y-4 max-w-xl">
                    <p>This modal covers the entire screen — ideal for immersive workflows.</p>
                    <Input placeholder="Enter some text..." />
                    <Flex gap="md">
                        <Button onClick={() => setFullOpen(false)}>Close</Button>
                        <Button variant="secondary">Save Changes</Button>
                    </Flex>
                </div>
            </FullscreenModal>

            <SideModal isOpen={sideOpen} onClose={() => setSideOpen(false)} title="Side Panel">
                <div className="space-y-4">
                    <p>Slides in from the right. Great for detail panels and filter drawers.</p>
                    <div className="space-y-2">
                        <label>Name</label>
                        <Input placeholder="Enter your name..." />
                    </div>
                    <div className="space-y-2">
                        <label>Message</label>
                        <Textarea placeholder="Enter your message..." />
                    </div>
                    <Flex gap="md" justify="end">
                        <Button variant="outline" onClick={() => setSideOpen(false)}>Cancel</Button>
                        <Button onClick={() => setSideOpen(false)}>Submit</Button>
                    </Flex>
                </div>
            </SideModal>
        </div>
    );
}
