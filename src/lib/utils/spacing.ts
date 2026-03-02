export type SpacingValue =
    | -2
    | -1.75
    | -1.5
    | -1.25
    | -1
    | -0.75
    | -0.5
    | -0.25
    | 0
    | 0.25
    | 0.5
    | 0.75
    | 1
    | 1.25
    | 1.5
    | 1.75
    | 2;

export interface SpacingProps {
    m?: SpacingValue;
    mt?: SpacingValue;
    mr?: SpacingValue;
    mb?: SpacingValue;
    ml?: SpacingValue;
    mx?: SpacingValue;
    my?: SpacingValue;
    p?: SpacingValue;
    pt?: SpacingValue;
    pr?: SpacingValue;
    pb?: SpacingValue;
    pl?: SpacingValue;
    px?: SpacingValue;
    py?: SpacingValue;
}

export interface OverflowProps {
    overflow?: 'auto' | 'hidden' | 'visible' | 'scroll';
    overflowX?: 'auto' | 'hidden' | 'visible' | 'scroll';
    overflowY?: 'auto' | 'hidden' | 'visible' | 'scroll';
}

function getSpacingClass(prefix: string, value?: SpacingValue) {
    if (value === undefined || value === 0) return '';
    const isNegative = value < 0;
    const absValue = Math.abs(value);
    const tailwindValue = absValue * 4;
    return `${isNegative ? '-' : ''}${prefix}-${tailwindValue}`;
}

export function getSpacingClasses(props: SpacingProps) {
    return [
        getSpacingClass('m', props.m),
        getSpacingClass('mt', props.mt),
        getSpacingClass('mr', props.mr),
        getSpacingClass('mb', props.mb),
        getSpacingClass('ml', props.ml),
        getSpacingClass('mx', props.mx),
        getSpacingClass('my', props.my),
        getSpacingClass('p', props.p),
        getSpacingClass('pt', props.pt),
        getSpacingClass('pr', props.pr),
        getSpacingClass('pb', props.pb),
        getSpacingClass('pl', props.pl),
        getSpacingClass('px', props.px),
        getSpacingClass('py', props.py),
    ].filter(Boolean).join(' ');
}

export function getOverflowClasses(props: OverflowProps) {
    return [
        props.overflow && `overflow-${props.overflow}`,
        props.overflowX && `overflow-x-${props.overflowX}`,
        props.overflowY && `overflow-y-${props.overflowY}`,
    ].filter(Boolean).join(' ');
}
