/* react */
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
/* layouts */
import { PanelLayout } from 'shared/layouts';

const DashboardDesktop: FC = () => {
    return (
        <PanelLayout orientation="horizontal">
            <div>Sidebar</div>

            <div>
                <Outlet />
            </div>
        </PanelLayout>
    );
};

export default memo(DashboardDesktop);
