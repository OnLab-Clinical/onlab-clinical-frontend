/* props */
import {
    AppbarProps,
    DrawerProps,
    SidebarProps,
    TopbarProps,
} from 'app/core/components';

export interface DashboardLayoutContext {
    sidebarProps: SidebarProps;
    topbarProps: TopbarProps;
    appbarProps: AppbarProps;
    drawerProps: DrawerProps;
}
