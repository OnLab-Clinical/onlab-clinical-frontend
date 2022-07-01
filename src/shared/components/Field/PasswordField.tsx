/* react */
import { FC, memo } from 'react';
/* props */
import {
    FieldLayoutProps,
    FieldsProps,
    PasswordFieldProps,
} from './Field.props';
/* layouts */
import FieldLayout from './FieldLayout';
/* utils */
import { classNames } from 'shared/utils';
/* styles */
import styles from './Field.module.scss';

const PasswordField: FC<PasswordFieldProps> = ({
    className,
    beforeContent,
    afterContent,
    classNameContent,
    classNameIcon,
    isPasswordVisible,
    onShowPassword,
    onHidePassword,
    showIcon,
    hideIcon,
    ...rest
}) => {
    const layoutProps: FieldLayoutProps = {
        className,
        beforeContent,
        afterContent,
    };

    const inputProps: FieldsProps = {
        className: classNames(styles.TextField, classNameContent),
        type: isPasswordVisible ? 'text' : 'password',
        ...rest,
    };

    const iconProps = {
        className: classNames(styles.PasswordIcon, classNameIcon),
        onClick: isPasswordVisible ? onHidePassword : onShowPassword,
        children: isPasswordVisible
            ? typeof hideIcon === 'function'
                ? hideIcon()
                : hideIcon ?? 'Hide'
            : typeof showIcon === 'function'
            ? showIcon()
            : showIcon ?? 'Show',
    };

    return (
        <FieldLayout {...layoutProps}>
            <input {...inputProps} />

            <i {...iconProps} />
        </FieldLayout>
    );
};

export default memo(PasswordField);
