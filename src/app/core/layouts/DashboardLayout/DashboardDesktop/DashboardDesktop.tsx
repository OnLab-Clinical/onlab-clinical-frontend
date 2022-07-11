/* react */
import { FC, memo, useContext } from 'react';
import { Outlet } from 'react-router-dom';
/* context */
import { Context } from '../DashboardLayout.context';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Sidebar, Topbar } from 'app/core/components';
/* utils */
import { classNames } from 'shared/utils';
/* styles */
import styles from './DashboardDesktop.module.scss';

const DashboardDesktop: FC = () => {
    const {
        /* props */
        sidebarProps,
        topbarProps,
    } = useContext(Context);

    return (
        <PanelLayout className={styles.Dashboard}>
            <Sidebar
                className={classNames(
                    styles.Sidebar,
                    sidebarProps.isFull && styles.SidebarFull
                )}
                {...sidebarProps}
            />

            <PanelLayout orientation="col">
                <Topbar {...topbarProps} />

                <PanelLayout className={styles.Content} orientation="col">
                    <Outlet />
                </PanelLayout>
            </PanelLayout>
        </PanelLayout>
    );
};

export default memo(DashboardDesktop);
