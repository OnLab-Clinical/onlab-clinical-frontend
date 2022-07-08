/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* props */
import { ChildrenProps } from 'shared/props';
/* types */
import { DropdownMenuItem, MenuGroup, PlainMenuItem } from 'app/types';

export interface SidebarProps
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'children'
        >,
        ChildrenProps {
    organization: string;
    menu?: MenuGroup[];
}

export interface MenuGroupProps extends MenuGroup {}

export interface DropdownMenuItemProps extends DropdownMenuItem {}

export interface PlainMenuItemProps extends PlainMenuItem {}
