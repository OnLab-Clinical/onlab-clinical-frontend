/* react */
import { FC, memo } from 'react';
/* props */
import { DropLayoutProps } from './DropLayout.props';
/* utils */
import { classNames } from 'shared/utils';
/* types */
import { Position } from 'shared/types';
/* styles */
import styles from './DropLayout.module.scss';

/* anchor edge strategy */
const anchorEdgeStrategy: Record<Position, string> = {
    top: styles.Top,
    bottom: styles.Bottom,
    left: styles.Left,
    right: styles.Right,
};

const DropLayout: FC<DropLayoutProps> = ({
    className,
    dropContent,
    openTo = 'bottom',
    anchorEdge = 'bottom',
    anchorAlignment = 'end',
    children,
    ...rest
}) => {
    return (
        <div className={classNames(styles.Drop, className)} {...rest}>
            {typeof children === 'function' ? children() : children}

            <div
                className={classNames(
                    styles.Content,
                    anchorEdge && anchorEdgeStrategy[anchorEdge]
                )}>
                {typeof dropContent === 'function'
                    ? dropContent()
                    : dropContent}
            </div>
        </div>
    );
};

export default memo(DropLayout);
