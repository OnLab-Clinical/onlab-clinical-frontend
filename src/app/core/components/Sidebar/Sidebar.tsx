/* react */
import { FC, memo } from 'react';
/* props */
import { SidebarProps } from './Sidebar.props';
/* layouts */
import { PanelLayout, ScrollLayout } from 'shared/layouts';
/* components */
import MenuGroup from './MenuGroup';
/* utils */
import { classNames } from 'shared/utils';
/* assets */
import { AppLogo } from 'assets';
/* styles */
import styles from './Sidebar.module.scss';

const Sidebar: FC<SidebarProps> = ({
    className,
    organization,
    menu,
    children,
    ...rest
}) => {
    return (
        <PanelLayout
            className={classNames(styles.Sidebar, className)}
            orientation="col"
            {...rest}>
            <div className={styles.Logo} title={organization}>
                <i>
                    <AppLogo />
                </i>

                <span>{organization}</span>
            </div>

            <ScrollLayout classNameContent={styles.Menu} orientation="col">
                {menu?.map((group, index) => (
                    <MenuGroup key={index} {...group} />
                ))}
            </ScrollLayout>
        </PanelLayout>
    );
};

export default memo(Sidebar);
