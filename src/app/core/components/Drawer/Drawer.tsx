/* react */
import { FC, memo } from 'react';
/* props */
import { DrawerProps } from './Drawer.props';
/* hooks */
import { useMinWidth } from 'shared/hooks';
/* layouts */
import { AccordionLayout, ModalLayout } from 'shared/layouts';
/* components */
import { Legend } from 'shared/components';
/* utils */
import { classNames, matchBreakPoint } from 'shared/utils';
/* assets */
import { AppLogoSrc } from 'assets';
/* styles */
import styles from './Drawer.module.scss';

const Drawer: FC<DrawerProps> = () => {
    const [breakPoint] = useMinWidth();

    return (
        <ModalLayout
            className={classNames(styles.Drawer, styles.Active)}
            isVisible={matchBreakPoint('xl', breakPoint).under}
            colAlignment="start">
            <div className={styles.User} title={'Steven Bustillo'}>
                <img src={AppLogoSrc} alt="user" />

                <AccordionLayout>
                    <Legend hasDots className={styles.UserName}>
                        Steven Bustillo
                    </Legend>
                </AccordionLayout>
            </div>
        </ModalLayout>
    );
};

export default memo(Drawer);
