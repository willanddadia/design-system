import { useState } from 'react';
import type { Story } from '@ladle/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Flex } from '../layout/Flex';
import { FullscreenModal, PopupModal, SideModal } from '../overlays/Modal';

export const ModalVariants: Story = () => {
    const [fullOpen, setFullOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);

    return (
        <Flex gap="md" wrap>
            <Button onClick={() => setPopupOpen(true)}>Open Popup Modal</Button>
            <Button onClick={() => setFullOpen(true)} variant="secondary">
                Open Fullscreen Modal
            </Button>
            <Button onClick={() => setSideOpen(true)} variant="outline">
                Open Side Modal
            </Button>

            <PopupModal isOpen={popupOpen} onClose={() => setPopupOpen(false)} title="Confirm Action">
                <div className="space-y-4">
                    <p>Are you sure you want to proceed? This action cannot be undone.</p>
                    <Flex gap="md" justify="end">
                        <Button variant="outline" onClick={() => setPopupOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setPopupOpen(false)}>Confirm</Button>
                    </Flex>
                </div>
            </PopupModal>

            <FullscreenModal
                isOpen={fullOpen}
                onClose={() => setFullOpen(false)}
                title="Fullscreen Modal"
            >
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
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Enter your name..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea placeholder="Enter your message..." />
                    </div>
                    <Flex gap="md" justify="end">
                        <Button variant="outline" onClick={() => setSideOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setSideOpen(false)}>Submit</Button>
                    </Flex>
                </div>
            </SideModal>
        </Flex>
    );
};

export default {
    title: 'Overlays/Modal',
};
