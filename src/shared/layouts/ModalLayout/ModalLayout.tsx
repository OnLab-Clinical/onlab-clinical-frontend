/* react */
import { FC, memo } from 'react';
import { createPortal } from 'react-dom';
/* props */
import { ModalLayoutProps } from './ModalLayout.props';
/* utils */
import { classNames } from 'shared/utils';
/* types */
import { Alignment } from 'shared/types';
/* styles */
import styles from './ModalLayout.module.scss';

const horizontalAlignmentStrategy: Record<Alignment, string> = {
    start: styles.HorizontalStart,
    center: styles.HorizontalCenter,
    end: styles.HorizontalEnd,
};

const verticalAlignmentStrategy: Record<Alignment, string> = {
    start: styles.VerticalStart,
    center: styles.VerticalCenter,
    end: styles.VerticalEnd,
};

const ModalLayout: FC<ModalLayoutProps> = ({
    className,
    isVisible,
    hasIndentation,
    onClickOverlay,
    children,
    node,
    nodeId,
    verticalAlignment,
    horizontalAlignment,
    ...rest
}) => {
    if (!isVisible) return <></>;

    return createPortal(
        <div
            className={classNames(
                styles.ModalLayout,
                hasIndentation && styles.Indentation,
                verticalAlignment &&
                    verticalAlignmentStrategy[verticalAlignment],
                horizontalAlignment &&
                    horizontalAlignmentStrategy[horizontalAlignment]
            )}
            {...rest}>
            <div className={styles.Overlay} onClick={onClickOverlay} />

            <div className={classNames(styles.Content, className)}>
                {typeof children === 'function' ? children() : children}
            </div>
        </div>,
        node ?? (document.getElementById(nodeId ?? 'modal') as HTMLElement)
    );
};

export default memo(ModalLayout);
