/* react */
import { FC, memo } from 'react';
/* context */
import { Context } from './DashboardLayout.context';
/* custom hook */
import { useDashboardLayout } from './useDashboardLayout.hook';
/* components */
import { DashboardDesktop } from './DashboardDesktop';

const DashboardLayout: FC = () => {
    const { context } = useDashboardLayout();

    return (
        <Context.Provider value={context}>
            <DashboardDesktop />
        </Context.Provider>
    );
};

export default memo(DashboardLayout);
