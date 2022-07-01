/* react */
import { FC, memo } from 'react';
/* props */
import { FieldLayoutProps, FieldProps } from './Field.props';
/* layouts */
import FieldLayout from './FieldLayout';
/* utils */
import { classNames } from 'shared/utils';
/* styles */
import styles from './Field.module.scss';

const TextField: FC<FieldProps> = ({
    className,
    classNameContent,
    beforeContent,
    afterContent,
    ...rest
}) => {
    /* props */

    const layoutProps: FieldLayoutProps = {
        className,
        beforeContent,
        afterContent,
    };

    const inputProps: FieldProps = {
        className: classNames(styles.TextField, classNameContent),
        ...rest,
    };

    return (
        <FieldLayout {...layoutProps}>
            <input {...inputProps} />
        </FieldLayout>
    );
};

export default memo(TextField);
