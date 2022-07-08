/* react */
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import { Sidebar, Topbar } from 'app/core/components';
/* assets */
import { MdDashboard, MdQuestionAnswer } from 'react-icons/md';
/* styles */
import styles from './DashboardDesktop.module.scss';

const DashboardDesktop: FC = () => {
    return (
        <PanelLayout className={styles.Dashboard}>
            <Sidebar
                organization="OnLab-Clinical"
                menu={[
                    {
                        label: 'Menu',
                        items: [
                            {
                                icon: <MdDashboard />,
                                label: 'Dashboard',
                                type: 'plain',
                                to: '',
                            },
                            {
                                icon: <MdQuestionAnswer />,
                                label: 'Messages',
                                type: 'plain',
                                to: 'messages',
                            },
                        ],
                    },
                ]}
            />

            <PanelLayout orientation="col">
                <Topbar />

                <Outlet />
            </PanelLayout>
        </PanelLayout>
    );
};

export default memo(DashboardDesktop);
