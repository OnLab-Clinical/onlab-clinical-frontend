/* react */
import { FC, memo } from 'react';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* styles */
import './DashboardView.scss';

const DashboardView: FC = () => {
    return (
        <PanelLayout orientation="horizontal" className="dashboard-view">
            Dashboard
        </PanelLayout>
    );
};

export default memo(DashboardView);
