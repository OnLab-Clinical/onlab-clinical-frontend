/* react */
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Appbar, Drawer } from 'app/core/components';
/* styles */
import styles from './DashboardMobile.module.scss';

const DashboardMobile: FC = () => {
    return (
        <PanelLayout className={styles.Dashboard}>
            <Appbar />

            <PanelLayout orientation="col">
                <Outlet />
            </PanelLayout>

            <Drawer />
        </PanelLayout>
    );
};

export default memo(DashboardMobile);
