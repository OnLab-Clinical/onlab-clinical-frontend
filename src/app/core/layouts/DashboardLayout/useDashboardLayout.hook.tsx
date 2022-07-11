/* props */
import { SidebarProps, TopbarProps } from 'app/core/components';
import { DashboardLayoutContext } from './DashboardLayout.props';
/* hooks */
import { useActive } from 'shared/hooks';
/* assets */
import { MdDashboard, MdQuestionAnswer } from 'react-icons/md';

export const useDashboardLayout = () => {
    /* state */

    const [isSidebar, , , toggleSidebar] = useActive();

    /* props */

    const sidebarProps: SidebarProps = {
        isFull: isSidebar,
        organization: 'OnLab-Clinical',
        menu: [
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
        ],
    };

    const topbarProps: TopbarProps = {
        onClickMenu: toggleSidebar,
    };

    /* context */

    const context: DashboardLayoutContext = {
        /* props */
        sidebarProps,
        topbarProps,
    };

    return { context };
};
