import { OTPInput } from 'input-otp';
import * as React from 'react';
declare function InputOTP({ children, ...props }: Omit<React.ComponentProps<typeof OTPInput>, 'className' | 'containerClassName' | 'render'> & {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function InputOTPGroup({ ...props }: Omit<React.ComponentProps<'div'>, 'className'>): import("react/jsx-runtime").JSX.Element;
declare function InputOTPSlot({ index, ...props }: Omit<React.ComponentProps<'div'>, 'className'> & {
    index: number;
}): import("react/jsx-runtime").JSX.Element;
declare function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
