/* react */
import { forwardRef, memo } from 'react';
/* props */
import { AccordionLayoutProps } from './AccordionLayout.props';
/* utils */
import { classNames } from 'shared/utils';
/* styles */
import styles from './AccordionLayout.module.scss';

const AccordionLayout = forwardRef<HTMLDivElement | null, AccordionLayoutProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <div
                className={classNames(styles.AccordionLayout, className)}
                ref={ref}
                {...rest}>
                {typeof children === 'function' ? children() : children}
            </div>
        );
    }
);

export default memo(AccordionLayout);
