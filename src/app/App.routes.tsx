/* react */
import { FC, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
/* layouts */
import { DashboardLayout } from './core/layouts';
/* modules */
import { DashboardView } from './core';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardView />} />
            </Route>
        </Routes>
    );
};

export default memo(AppRoutes);
