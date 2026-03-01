import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/Card';
import { Badge } from './components/Badge';
import { Switch } from './components/Switch';
import { Select } from './components/Select';
import { Dropdown } from './components/Dropdown';
import { SelectBox } from './components/SelectBox';
import { Textarea } from './components/Textarea';
import { Alert } from './components/Alert';
import { Container } from './components/Container';
import { Padded } from './components/Padded';
import { FullscreenModal, PopupModal, SideModal } from './components/Modal';
import { Flex } from './components/Flex';
import { Grid } from './components/Grid';
import { BorderedTable, BorderlessTable } from './components/Table';
import { Palette, Type, Layout, Package, Box, Layers, Search, Heart, Share2, Settings, Trash2, Edit, Plus } from 'lucide-react';

export default function App() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [selectBoxValue, setSelectBoxValue] = useState('');
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([]);

  // Sample data for tables
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  ];

  const tableColumns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { 
      key: 'role', 
      header: 'Role',
      render: (item: typeof tableData[0]) => (
        <Badge variant={item.role === 'Admin' ? 'destructive' : 'secondary'}>
          {item.role}
        </Badge>
      )
    },
  ];

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  const selectBoxOptions = [
    { value: 'basic', label: 'Basic Plan', description: 'Perfect for individuals and small teams' },
    { value: 'pro', label: 'Pro Plan', description: 'Advanced features for growing businesses' },
    { value: 'enterprise', label: 'Enterprise Plan', description: 'Custom solutions for large organizations' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-8 h-8" />
            <h1>Design System</h1>
          </div>
          <p className="text-muted-foreground">
            A comprehensive collection of reusable components built with React and Tailwind CSS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {/* Colors Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6" />
              <h2>Color Palette</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-primary"></div>
                <p className="text-sm">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-secondary"></div>
                <p className="text-sm">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-accent"></div>
                <p className="text-sm">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-destructive"></div>
                <p className="text-sm">Destructive</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-muted"></div>
                <p className="text-sm">Muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-card border-2 border-border"></div>
                <p className="text-sm">Card</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-input-background"></div>
                <p className="text-sm">Input</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg border-2 border-border"></div>
                <p className="text-sm">Border</p>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Type className="w-6 h-6" />
              <h2>Typography</h2>
            </div>
            <Card variant="bordered">
              <div className="space-y-4">
                <div>
                  <h1>Heading 1</h1>
                  <p className="text-sm text-muted-foreground mt-1">font-size: var(--text-2xl), font-weight: 500</p>
                </div>
                <div>
                  <h2>Heading 2</h2>
                  <p className="text-sm text-muted-foreground mt-1">font-size: var(--text-xl), font-weight: 500</p>
                </div>
                <div>
                  <h3>Heading 3</h3>
                  <p className="text-sm text-muted-foreground mt-1">font-size: var(--text-lg), font-weight: 500</p>
                </div>
                <div>
                  <h4>Heading 4</h4>
                  <p className="text-sm text-muted-foreground mt-1">font-size: var(--text-base), font-weight: 500</p>
                </div>
                <div>
                  <p>Body text - Regular paragraph with normal weight and line height optimized for readability.</p>
                  <p className="text-sm text-muted-foreground mt-1">font-size: var(--text-base), font-weight: 400</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Muted text - Used for secondary information and descriptions.</p>
                  <p className="text-sm text-muted-foreground mt-1">color: var(--muted-foreground)</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Buttons Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Layout className="w-6 h-6" />
              <h2>Buttons</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                  <CardDescription>Different button styles for various use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Sizes</CardTitle>
                  <CardDescription>Three size options for different contexts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>States</CardTitle>
                  <CardDescription>Disabled and active states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" disabled>Disabled Outline</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Icon Only</CardTitle>
                  <CardDescription>Square buttons with just icons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">Sizes</p>
                      <Flex gap="sm" align="center">
                        <Button iconOnly size="sm" variant="primary">
                          <Search className="w-4 h-4" />
                        </Button>
                        <Button iconOnly size="md" variant="primary">
                          <Search className="w-5 h-5" />
                        </Button>
                        <Button iconOnly size="lg" variant="primary">
                          <Search className="w-6 h-6" />
                        </Button>
                      </Flex>
                    </div>
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">Variants</p>
                      <Flex gap="sm" wrap>
                        <Button iconOnly variant="primary">
                          <Heart className="w-5 h-5" />
                        </Button>
                        <Button iconOnly variant="secondary">
                          <Share2 className="w-5 h-5" />
                        </Button>
                        <Button iconOnly variant="outline">
                          <Settings className="w-5 h-5" />
                        </Button>
                        <Button iconOnly variant="ghost">
                          <Edit className="w-5 h-5" />
                        </Button>
                        <Button iconOnly variant="destructive">
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </Flex>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Form Inputs Section */}
          <section>
            <h2 className="mb-6">Form Elements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Text Input</CardTitle>
                  <CardDescription>Resizable input fields with multiple sizes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Small</label>
                      <Input size="sm" placeholder="Small input..." />
                    </div>
                    <div>
                      <label className="block mb-2">Medium (Default)</label>
                      <Input size="md" placeholder="Medium input..." />
                    </div>
                    <div>
                      <label className="block mb-2">Large</label>
                      <Input size="lg" placeholder="Large input..." />
                    </div>
                    <div>
                      <label className="block mb-2">Error state</label>
                      <Input error placeholder="Invalid input" />
                    </div>
                    <div>
                      <label className="block mb-2">Disabled</label>
                      <Input disabled placeholder="Disabled input" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Dropdown (Custom)</CardTitle>
                  <CardDescription>Modern dropdown with custom styling</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Small</label>
                      <Dropdown 
                        size="sm"
                        options={dropdownOptions}
                        value={dropdownValue}
                        onChange={setDropdownValue}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Medium (Default)</label>
                      <Dropdown 
                        size="md"
                        options={dropdownOptions}
                        value={dropdownValue}
                        onChange={setDropdownValue}
                        placeholder="Choose an option..."
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Large</label>
                      <Dropdown 
                        size="lg"
                        options={dropdownOptions}
                        value={dropdownValue}
                        onChange={setDropdownValue}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Error state</label>
                      <Dropdown 
                        error
                        options={dropdownOptions}
                        placeholder="Select an option..."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Select (Native)</CardTitle>
                  <CardDescription>Native HTML select for basic needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Choose an option</label>
                      <Select>
                        <option value="">Select...</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </Select>
                    </div>
                    <div>
                      <label className="block mb-2">Error state</label>
                      <Select error>
                        <option value="">Select...</option>
                        <option value="1">Option 1</option>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Textarea</CardTitle>
                  <CardDescription>Multi-line text input with sizes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Small</label>
                      <Textarea size="sm" placeholder="Small textarea..." />
                    </div>
                    <div>
                      <label className="block mb-2">Medium</label>
                      <Textarea size="md" placeholder="Medium textarea..." />
                    </div>
                    <div>
                      <label className="block mb-2">Large</label>
                      <Textarea size="lg" placeholder="Large textarea..." />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Switch</CardTitle>
                  <CardDescription>Toggle component for binary choices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Switch label="Enable notifications" />
                    <Switch 
                      label="Dark mode" 
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
                    />
                    <Switch label="Disabled option" disabled />
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Select Box (Single)</CardTitle>
                  <CardDescription>Visual selection component for single choice</CardDescription>
                </CardHeader>
                <CardContent>
                  <SelectBox 
                    options={selectBoxOptions}
                    value={selectBoxValue}
                    onChange={(val) => setSelectBoxValue(val as string)}
                  />
                </CardContent>
              </Card>

              <Card variant="bordered" className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Select Box (Multiple)</CardTitle>
                  <CardDescription>Visual selection component for multiple choices</CardDescription>
                </CardHeader>
                <CardContent>
                  <SelectBox 
                    options={selectBoxOptions}
                    value={multiSelectValue}
                    onChange={(val) => setMultiSelectValue(val as string[])}
                    multiple
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Badges Section */}
          <section>
            <h2 className="mb-6">Badges</h2>
            <Card variant="bordered">
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="mb-6">Cards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Basic card with no border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the default card variant with a clean, minimal look.</p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Bordered Card</CardTitle>
                  <CardDescription>Card with visible border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This variant includes a border for better visual separation.</p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>Card with shadow effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This variant uses a shadow to create depth and elevation.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Alerts Section */}
          <section>
            <h2 className="mb-6">Alerts</h2>
            <div className="space-y-4">
              <Alert variant="default" title="Information">
                This is a default informational alert with an icon and description.
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
            </div>
          </section>

          {/* Containers Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Box className="w-6 h-6" />
              <h2>Container & Padded Components</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Margin Container</CardTitle>
                  <CardDescription>Wrapper with customizable margins</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Container margin="sm" bordered>
                      <p>Small margin with border</p>
                    </Container>
                    <Container margin="md" bordered className="bg-accent/20">
                      <p>Medium margin with border and background</p>
                    </Container>
                    <Container margin="lg">
                      <p>Large margin without border</p>
                    </Container>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Padded Component</CardTitle>
                  <CardDescription>Wrapper with customizable padding</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Padded padding="sm" bordered>
                      <p>Small padding with border</p>
                    </Padded>
                    <Padded padding="md" bordered className="bg-secondary/20">
                      <p>Medium padding with border and background</p>
                    </Padded>
                    <Padded padding="lg">
                      <p>Large padding without border</p>
                    </Padded>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Modals Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6" />
              <h2>Modals</h2>
            </div>
            <Card variant="bordered">
              <CardContent>
                <Flex gap="md" wrap>
                  <Button onClick={() => setFullscreenOpen(true)}>Open Fullscreen Modal</Button>
                  <Button onClick={() => setPopupOpen(true)} variant="secondary">Open Popup Modal</Button>
                  <Button onClick={() => setSideOpen(true)} variant="outline">Open Side Modal</Button>
                </Flex>
              </CardContent>
            </Card>

            {/* Modal Components */}
            <FullscreenModal 
              isOpen={fullscreenOpen} 
              onClose={() => setFullscreenOpen(false)}
              title="Fullscreen Modal"
            >
              <div className="space-y-4">
                <p>This modal covers the entire screen. It's great for immersive experiences or complex forms.</p>
                <Input placeholder="Enter some text..." />
                <Flex gap="md">
                  <Button onClick={() => setFullscreenOpen(false)}>Close</Button>
                  <Button variant="secondary">Save Changes</Button>
                </Flex>
              </div>
            </FullscreenModal>

            <PopupModal 
              isOpen={popupOpen} 
              onClose={() => setPopupOpen(false)}
              title="Popup Modal"
            >
              <div className="space-y-4">
                <p>This modal appears in the center of the screen. Perfect for confirmations or quick actions.</p>
                <Input placeholder="Enter your email..." />
                <Flex gap="md" justify="end">
                  <Button variant="outline" onClick={() => setPopupOpen(false)}>Cancel</Button>
                  <Button onClick={() => setPopupOpen(false)}>Confirm</Button>
                </Flex>
              </div>
            </PopupModal>

            <SideModal 
              isOpen={sideOpen} 
              onClose={() => setSideOpen(false)}
              title="Side Modal"
            >
              <div className="space-y-4">
                <p>This modal slides in from the side. Ideal for navigation menus or detailed information panels.</p>
                <div className="space-y-2">
                  <label>Name</label>
                  <Input placeholder="Enter your name..." />
                </div>
                <div className="space-y-2">
                  <label>Email</label>
                  <Input type="email" placeholder="Enter your email..." />
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
          </section>

          {/* Layout Wrappers Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Layout className="w-6 h-6" />
              <h2>Layout Wrappers</h2>
            </div>
            <div className="space-y-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Flex Container</CardTitle>
                  <CardDescription>Flexible layout with various configurations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">Row with gap</p>
                      <Flex direction="row" gap="md">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded">Item 1</div>
                        <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded">Item 2</div>
                        <div className="bg-accent text-accent-foreground px-4 py-2 rounded">Item 3</div>
                      </Flex>
                    </div>
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">Column centered</p>
                      <Flex direction="col" gap="sm" align="center">
                        <Badge>Badge 1</Badge>
                        <Badge variant="secondary">Badge 2</Badge>
                        <Badge variant="success">Badge 3</Badge>
                      </Flex>
                    </div>
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">Space between</p>
                      <Flex direction="row" justify="between" align="center">
                        <span>Left Content</span>
                        <Button size="sm">Action</Button>
                      </Flex>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Grid Container</CardTitle>
                  <CardDescription>Grid layout with responsive columns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">3 columns with gap</p>
                      <Grid cols={3} gap="md">
                        <div className="bg-muted p-4 rounded">Grid Item 1</div>
                        <div className="bg-muted p-4 rounded">Grid Item 2</div>
                        <div className="bg-muted p-4 rounded">Grid Item 3</div>
                        <div className="bg-muted p-4 rounded">Grid Item 4</div>
                        <div className="bg-muted p-4 rounded">Grid Item 5</div>
                        <div className="bg-muted p-4 rounded">Grid Item 6</div>
                      </Grid>
                    </div>
                    <div>
                      <p className="mb-3 text-sm text-muted-foreground">Auto-fit columns</p>
                      <Grid cols="auto" gap="lg">
                        <Card variant="bordered">
                          <CardContent>
                            <p>Auto Card 1</p>
                          </CardContent>
                        </Card>
                        <Card variant="bordered">
                          <CardContent>
                            <p>Auto Card 2</p>
                          </CardContent>
                        </Card>
                        <Card variant="bordered">
                          <CardContent>
                            <p>Auto Card 3</p>
                          </CardContent>
                        </Card>
                      </Grid>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tables Section */}
          <section>
            <h2 className="mb-6">Tables</h2>
            <div className="space-y-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Bordered Table</CardTitle>
                  <CardDescription>Table with visible borders and hover effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <BorderedTable data={tableData} columns={tableColumns} />
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Borderless Table</CardTitle>
                  <CardDescription>Clean table without borders</CardDescription>
                </CardHeader>
                <CardContent>
                  <BorderlessTable data={tableData} columns={tableColumns} striped />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-muted-foreground">
          <p>Design System • Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}