import { ReactNode } from 'react';
export declare function Section({ title, description, children }: {
    title: string;
    description?: string;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function Example({ title, code, children }: {
    title?: string;
    code?: string;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export interface PropDef {
    name: string;
    type: string;
    default?: string;
    description: string;
}
export declare function PropTable({ props }: {
    props: PropDef[];
}): import("react/jsx-runtime").JSX.Element;
export declare function PageHero({ title, description, badge }: {
    title: string;
    description: string;
    badge?: string;
}): import("react/jsx-runtime").JSX.Element;
