import { FC, memo } from 'react';
/* layouts */
import { DropLayout } from 'shared/layouts';
/* components */
import { Button } from 'shared/components';
/* styles */
import styles from './DropMenu.module.scss';

const DropMenu: FC = () => {
    return (
        <DropLayout
            className={styles.Menu}
            anchorRow="end"
            anchorCol="start"
            dropRow="end"
            dropCol="start"
            isHoverable
            drop={<div className={styles.Content}>content</div>}>
            <Button className={styles.Children}>CLICK!</Button>
        </DropLayout>
    );
};

export default memo(DropMenu);
