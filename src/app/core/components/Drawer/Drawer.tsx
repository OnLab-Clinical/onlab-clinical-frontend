/* react */
import { FC, memo } from 'react';
/* props */
import { DrawerProps } from './Drawer.props';
/* hooks */
import { useMinWidth } from 'shared/hooks';
/* layouts */
import { ModalLayout } from 'shared/layouts';
/* utils */
import { classNames, matchBreakPoint } from 'shared/utils';
/* assets */
import { AppLogoSrc } from 'assets';
/* styles */
import styles from './Drawer.module.scss';
import { Legend } from 'shared/components';

const Drawer: FC<DrawerProps> = () => {
    const [breakPoint] = useMinWidth();

    return (
        <ModalLayout
            className={classNames(styles.Drawer, styles.Active)}
            isVisible={matchBreakPoint('xl', breakPoint).under}
            colAlignment="start">
            <div className={styles.User} title={'Steven Bustillo'}>
                <img src={AppLogoSrc} alt="user" />

                <Legend hasDots>Steven Bustillo</Legend>
            </div>
        </ModalLayout>
    );
};

export default memo(Drawer);
