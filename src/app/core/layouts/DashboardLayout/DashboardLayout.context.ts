/* react */
import { createContext } from 'react';
/* props */
import { DashboardLayoutContext } from './DashboardLayout.props';

export const Context = createContext<DashboardLayoutContext>({
    sidebarProps: {},
    topbarProps: {},
});
