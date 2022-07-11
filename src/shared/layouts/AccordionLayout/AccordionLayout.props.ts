/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps } from 'shared/props';

export interface AccordionLayoutProps
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'children' | 'ref'
        >,
        ChildrenProps {}
