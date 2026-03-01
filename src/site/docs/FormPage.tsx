import { useState } from 'react';
import { Input } from '@lib/components/ui/input';
import { Textarea } from '@lib/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@lib/components/ui/select';
import { Dropdown } from '@lib/components/overlays/Dropdown';
import { Switch } from '@lib/components/ui/switch';
import { SelectBox } from '@lib/components/ui/SelectBox';
import { Section, Example, PropTable, PageHero } from './DocLayout';

const inputProps = [
  {
    name: 'fieldSize',
    type: "'sm' | 'default' | 'md' | 'lg'",
    default: "'default'",
    description: 'Controls the height and font size of the input.',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Applies a destructive border color for error states.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents interaction and reduces opacity.',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '—',
    description: 'Placeholder text shown when the input is empty.',
  },
];

const dropdownProps = [
  {
    name: 'options',
    type: 'DropdownOption[]',
    default: '—',
    description: 'Array of { value, label } objects to display.',
  },
  {
    name: 'value',
    type: 'string',
    default: '—',
    description: 'Currently selected value (controlled).',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    default: '—',
    description: 'Called when a new option is selected.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Controls height and font size.',
  },
  { name: 'error', type: 'boolean', default: 'false', description: 'Error border state.' },
  {
    name: 'placeholder',
    type: 'string',
    default: "'Select an option...'",
    description: 'Placeholder when no value is selected.',
  },
];

const switchProps = [
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: 'Text label rendered next to the toggle.',
  },
  { name: 'checked', type: 'boolean', default: '—', description: 'Controlled checked state.' },
  {
    name: 'onChange',
    type: '(e: ChangeEvent) => void',
    default: '—',
    description: 'Called when toggle changes.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
];

const selectBoxProps = [
  {
    name: 'options',
    type: 'SelectBoxOption[]',
    default: '—',
    description: 'Array of { value, label, description? } objects.',
  },
  {
    name: 'value',
    type: 'string | string[]',
    default: '—',
    description: 'Selected value(s) — string for single, string[] for multiple.',
  },
  {
    name: 'onChange',
    type: '(val: string | string[]) => void',
    default: '—',
    description: 'Called with the new value on selection change.',
  },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Enable multi-select mode.' },
];

const dropdownOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

const planOptions = [
  { value: 'basic', label: 'Basic Plan', description: 'Great for individuals' },
  { value: 'pro', label: 'Pro Plan', description: 'Advanced features for teams' },
  { value: 'enterprise', label: 'Enterprise', description: 'Custom solutions' },
];

export function FormPage() {
  const [ddVal, setDdVal] = useState('');
  const [switchOn, setSwitchOn] = useState(false);
  const [planVal, setPlanVal] = useState('');
  const [multiVal, setMultiVal] = useState<string[]>([]);

  return (
    <div>
      <PageHero
        badge="Forms"
        title="Form Elements"
        description="A complete set of input primitives: text inputs, dropdowns, selects, textareas, toggles, and visual selectors."
      />

      {/* Input */}
      <Section
        title="Input"
        description="Standard text input with three sizes and error/disabled states."
      >
        <Example
          title="Sizes"
          code={`<Input fieldSize="sm" placeholder="Small..." />
<Input fieldSize="default" placeholder="Default..." />
<Input fieldSize="md" placeholder="Medium..." />
<Input fieldSize="lg" placeholder="Large..." />`}
        >
          <div className="space-y-3 max-w-sm">
            <Input fieldSize="sm" placeholder="Small input..." />
            <Input fieldSize="default" placeholder="Default input..." />
            <Input fieldSize="md" placeholder="Medium input..." />
            <Input fieldSize="lg" placeholder="Large input..." />
          </div>
        </Example>
        <Example
          title="States"
          code={`<Input error placeholder="Error state" />
<Input disabled placeholder="Disabled" />`}
        >
          <div className="space-y-3 max-w-sm">
            <Input error placeholder="Error state" />
            <Input disabled placeholder="Disabled" />
          </div>
        </Example>
        <PropTable props={inputProps} />
      </Section>

      {/* Dropdown */}
      <Section
        title="Dropdown"
        description="Custom-styled dropdown with keyboard support, size variants, and error state."
      >
        <Example
          title="Sizes + Error"
          code={`<Dropdown size="sm" options={options} value={val} onChange={setVal} />
<Dropdown size="md" options={options} value={val} onChange={setVal} />
<Dropdown size="lg" options={options} value={val} onChange={setVal} />
<Dropdown error options={options} placeholder="Error state" />`}
        >
          <div className="space-y-3 max-w-sm">
            <Dropdown
              size="sm"
              options={dropdownOptions}
              value={ddVal}
              onChange={setDdVal}
              placeholder="Small..."
            />
            <Dropdown
              size="md"
              options={dropdownOptions}
              value={ddVal}
              onChange={setDdVal}
              placeholder="Medium..."
            />
            <Dropdown
              size="lg"
              options={dropdownOptions}
              value={ddVal}
              onChange={setDdVal}
              placeholder="Large..."
            />
            <Dropdown error options={dropdownOptions} placeholder="Error state..." />
          </div>
        </Example>
        <PropTable props={dropdownProps} />
      </Section>

      {/* Select (Radix-based) */}
      <Section title="Select" description="Accessible select component built with Radix UI.">
        <Example
          title="Controlled Select"
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="react">React</SelectItem>
    <SelectItem value="vue">Vue</SelectItem>
  </SelectContent>
</Select>`}
        >
          <div className="space-y-3 max-w-sm">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a framework..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger error>
                <SelectValue placeholder="Error state..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Example>
      </Section>

      {/* Textarea */}
      <Section title="Textarea" description="Multi-line text input with size variants.">
        <Example
          title="Sizes"
          code={`<Textarea fieldSize="sm" placeholder="Small..." />
<Textarea fieldSize="default" placeholder="Default..." />
<Textarea fieldSize="md" placeholder="Medium..." />
<Textarea fieldSize="lg" placeholder="Large..." />`}
        >
          <div className="space-y-3 max-w-sm">
            <Textarea fieldSize="sm" placeholder="Small textarea..." />
            <Textarea fieldSize="default" placeholder="Default textarea..." />
            <Textarea fieldSize="md" placeholder="Medium textarea..." />
            <Textarea fieldSize="lg" placeholder="Large textarea..." />
          </div>
        </Example>
      </Section>

      {/* Switch */}
      <Section
        title="Switch"
        description="A toggle for binary choices. Works with controlled or uncontrolled state."
      >
        <Example
          title="Label + States"
          code={`<Switch label="Enable notifications" />
<Switch label="Dark mode" checked={on} onChange={(e) => setOn(e.target.checked)} />
<Switch label="Disabled" disabled />`}
        >
          <div className="space-y-3">
            <Switch label="Enable notifications" />
            <Switch
              label="Dark mode"
              checked={switchOn}
              onCheckedChange={(checked) => setSwitchOn(checked)}
            />
            <Switch label="Disabled option" disabled />
          </div>
        </Example>
        <PropTable props={switchProps} />
      </Section>

      {/* SelectBox */}
      <Section
        title="SelectBox"
        description="Visual card-based selector for single or multiple choices. Great for plan selectors and configuration choices."
      >
        <Example
          title="Single select"
          code={`<SelectBox options={options} value={val} onChange={(v) => setVal(v as string)} />`}
        >
          <SelectBox
            options={planOptions}
            value={planVal}
            onChange={(v) => setPlanVal(v as string)}
          />
        </Example>
        <Example
          title="Multi select"
          code={`<SelectBox options={options} value={vals} onChange={(v) => setVals(v as string[])} multiple />`}
        >
          <SelectBox
            options={planOptions}
            value={multiVal}
            onChange={(v) => setMultiVal(v as string[])}
            multiple
          />
        </Example>
        <PropTable props={selectBoxProps} />
      </Section>
    </div>
  );
}
