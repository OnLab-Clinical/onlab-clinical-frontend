/* react */
import { FC, memo } from 'react';
/* props */
import { DrawerProps } from './Drawer.props';
/* layouts */
import { ModalLayout } from 'shared/layouts';
/* utils */
import { classNames } from 'shared/utils';
/* assets */
import { AppLogoSrc } from 'assets';
/* styles */
import styles from './Drawer.module.scss';

const Drawer: FC<DrawerProps> = () => {
    return (
        <ModalLayout
            className={classNames(styles.Drawer, styles.Active)}
            isVisible
            colAlignment="start">
            <div className={styles.User}>
                <img src={AppLogoSrc} alt="user" />

                <span>Steven Bustillo</span>
            </div>
        </ModalLayout>
    );
};

export default memo(Drawer);
