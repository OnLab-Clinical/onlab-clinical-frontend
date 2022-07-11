/* react */
import { FC, memo } from 'react';
/* props */
import { DropMenuProps } from './Topbar.props';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Button } from 'shared/components';
/* assets */
import { MdClose } from 'react-icons/md';
/* styles */
import styles from './DropMenu.module.scss';

const DropMenu: FC<DropMenuProps> = ({ onCloseDropMenu }) => {
    return (
        <PanelLayout className={styles.Menu} orientation="col">
            <Button onClick={onCloseDropMenu} className={styles.Close}>
                <i>
                    <MdClose />
                </i>
            </Button>

            <hr className={styles.Divider} />
        </PanelLayout>
    );
};

export default memo(DropMenu);
