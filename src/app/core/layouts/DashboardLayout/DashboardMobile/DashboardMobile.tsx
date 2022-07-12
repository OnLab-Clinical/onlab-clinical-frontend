/* react */
import { FC, memo, useContext } from 'react';
import { Outlet } from 'react-router-dom';
/* context */
import { Context } from '../DashboardLayout.context';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Appbar, Drawer } from 'app/core/components';
/* styles */
import styles from './DashboardMobile.module.scss';

const DashboardMobile: FC = () => {
    const {
        /* props */
        appbarProps,
        drawerProps,
    } = useContext(Context);
    return (
        <PanelLayout className={styles.Dashboard}>
            <Appbar {...appbarProps} />

            <PanelLayout orientation="col">
                <Outlet />
            </PanelLayout>

            <Drawer {...drawerProps} />
        </PanelLayout>
    );
};

export default memo(DashboardMobile);
