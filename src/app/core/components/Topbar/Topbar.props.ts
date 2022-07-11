import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TopbarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClickMenu?: () => void;
}

export interface DropMenuProps {
    onCloseDropMenu: () => void;
}
