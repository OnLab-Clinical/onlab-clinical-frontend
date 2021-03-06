/* react */
import { FC, memo } from 'react';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* styles */
import './DashboardView.scss';

const DashboardView: FC = () => {
    return (
        <PanelLayout orientation="col" className="dashboard-view">
            Dashboard
        </PanelLayout>
    );
};

export default memo(DashboardView);
