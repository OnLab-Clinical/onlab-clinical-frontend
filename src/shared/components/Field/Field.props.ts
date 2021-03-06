/* react */
import {
    DetailedHTMLProps,
    DragEvent,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
} from 'react';
/* props */
import { ChildrenProps, ContentLayoutProps } from 'shared/props';

export interface FieldLayoutProps
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'children'
        >,
        ChildrenProps,
        ContentLayoutProps {}

export type FieldStrategy =
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'decimal'
    | 'radio'
    | 'checkbox'
    | 'file'
    | 'date'
    | 'select'
    | 'find_select'
    | 'find_modal';

/* field */
export interface FieldProps
    extends Omit<
            DetailedHTMLProps<
                InputHTMLAttributes<HTMLInputElement>,
                HTMLInputElement
            >,
            | 'ref'
            | 'children'
            | 'type'
            | 'onDragEnter'
            | 'onDragOver'
            | 'onDragLeave'
            | 'onDrop'
        >,
        ContentLayoutProps {
    classNameContent?: string;
    strategy?: FieldStrategy;
}

/* password field */
export interface PasswordFieldProps<SHOW = null, HIDE = null>
    extends FieldProps {
    classNameIcon?: string;

    isPasswordVisible?: boolean;
    onShowPassword?: () => void;
    onHidePassword?: () => void;

    showIcon?: ReactNode | ReactNode[] | ((params?: SHOW) => ReactNode);
    hideIcon?: ReactNode | ReactNode[] | ((params?: HIDE) => ReactNode);
}

/* file field */
export interface FileFieldProps
    extends Omit<FieldProps, 'children'>,
        ChildrenProps {
    onDragEnter?: (event: DragEvent<HTMLElement>) => void;
    onDragOver?: (event: DragEvent<HTMLElement>) => void;
    onDragLeave?: (event: DragEvent<HTMLElement>) => void;
    onDrop?: (event: DragEvent<HTMLElement>) => void;
}

/* field strategy */
export type FieldsProps = FieldProps | PasswordFieldProps;
