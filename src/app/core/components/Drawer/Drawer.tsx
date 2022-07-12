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
import Accordion from './Accordion';
/* utils */
import { classNames, matchBreakPoint } from 'shared/utils';
/* assets */
import { AppLogoSrc } from 'assets';
/* styles */
import styles from './Drawer.module.scss';

const Drawer: FC<DrawerProps> = ({ userName, isDrawer, onClickOverlay }) => {
    const [breakPoint] = useMinWidth();

    return (
        <ModalLayout
            className={classNames(styles.Drawer, styles.Active)}
            isVisible={matchBreakPoint('xl', breakPoint).under && isDrawer}
            onClickOverlay={onClickOverlay}
            colAlignment="start">
            <div className={styles.User} title={userName}>
                <img src={AppLogoSrc} alt="user" />

                <AccordionLayout isHoverable accordion={<Accordion />}>
                    <Legend hasDots className={styles.UserName}>
                        {userName}
                    </Legend>
                </AccordionLayout>
            </div>
        </ModalLayout>
    );
};

export default memo(Drawer);
