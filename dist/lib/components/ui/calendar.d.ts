import { DayPickerProps } from 'react-day-picker';
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
export type CalendarProps = DistributiveOmit<DayPickerProps, 'className'> & {
    internalClassName?: string;
};
declare function Calendar({ internalClassName, classNames, showOutsideDays, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
export { Calendar };
