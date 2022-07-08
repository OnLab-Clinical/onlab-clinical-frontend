/* react */
import { ReactNode } from 'react';

export type MenuType = 'plain' | 'dropdown';

export interface MenuItem {
    label: string;
    icon: ReactNode;
    type: MenuType;
}

export interface PlainMenuItem extends MenuItem {
    to: string;
}

export interface DropdownMenuItem extends MenuItem {
    items: PlainMenuItem[];
}

export interface MenuGroup {
    label: string;
    items: (PlainMenuItem | DropdownMenuItem)[];
}
