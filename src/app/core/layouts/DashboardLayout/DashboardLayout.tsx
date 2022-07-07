/* react */
import { FC, memo } from 'react';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { DashboardDesktop } from './DashboardDesktop';

const DashboardLayout: FC = () => {
    return (
        <PanelLayout orientation="col">
            <DashboardDesktop />
        </PanelLayout>
    );
};

export default memo(DashboardLayout);
