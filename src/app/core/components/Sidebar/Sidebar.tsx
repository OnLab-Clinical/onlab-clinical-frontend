/* react */
import { FC, memo } from 'react';
/* props */
import { SidebarProps } from './Sidebar.props';
/* layouts */
import { ScrollLayout } from 'shared/layouts';
/* utils */
import { bem, classNames } from 'shared/utils';
/* assets */
import { LogoAsset } from 'assets';
/* styles */
import './Sidebar.scss';

/* base class name */
const BASE_CLASS = 'app-sidebar';

const Sidebar: FC<SidebarProps> = ({ className, ...rest }) => {
    return (
        <div className={classNames(BASE_CLASS, className)} {...rest}>
            <i className={bem(BASE_CLASS, '__logo')}>
                <LogoAsset />
            </i>

            <hr className={bem(BASE_CLASS, '__divider')} />

            <ScrollLayout orientation="col">Actions</ScrollLayout>
        </div>
    );
};

export default memo(Sidebar);
