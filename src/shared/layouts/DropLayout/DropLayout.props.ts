/* react */
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
/* props */
import { ChildrenProps } from 'shared/props';
/* types */
import { Alignment, Position } from 'shared/types';

export interface DropLayoutProps
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'children'
        >,
        ChildrenProps {
    dropContent?: ReactNode | ReactNode[] | (() => ReactNode);
    openTo?: Position;

    anchorEdge?: Position;
    anchorAlignment?: Alignment;
}
