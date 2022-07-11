/* react */
import { FC, memo } from 'react';
/* props */
import { DropMenuProps } from './Topbar.props';
/* hooks */
import { useClickOutside, useKeyDownEvent } from 'shared/hooks';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Button } from 'shared/components';
/* assets */
import { MdClose } from 'react-icons/md';
/* styles */
import styles from './DropMenu.module.scss';

const DropMenu: FC<DropMenuProps> = ({ onCloseDropMenu }) => {
    const [ref] = useClickOutside(onCloseDropMenu);

    useKeyDownEvent(event => event.key === 'Escape' && onCloseDropMenu());

    return (
        <PanelLayout className={styles.Menu} orientation="col" ref={ref}>
            <Button onClick={onCloseDropMenu} className={styles.Close}>
                <i>
                    <MdClose />
                </i>
            </Button>
        </PanelLayout>
    );
};

export default memo(DropMenu);
