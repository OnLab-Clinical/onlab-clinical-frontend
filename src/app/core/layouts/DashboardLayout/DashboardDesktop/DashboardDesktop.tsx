/* react */
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Sidebar } from 'app/core/components';
/* utils */
import { bem } from 'shared/utils';
/* styles */
import './DashboardDesktop.scss';

/* base class name */
const BASE_CLASS = 'app-dashboard-desktop';

const DashboardDesktop: FC = () => {
    return (
        <PanelLayout className={BASE_CLASS} orientation="row">
            <Sidebar className={bem(BASE_CLASS, '__sidebar')} />

            <PanelLayout orientation="col">
                <Outlet />
            </PanelLayout>
        </PanelLayout>
    );
};

export default memo(DashboardDesktop);
