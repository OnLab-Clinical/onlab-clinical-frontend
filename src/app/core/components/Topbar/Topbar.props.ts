import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TopbarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface DropMenuProps {
    onCloseDropMenu: () => void;
}
