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
    isFull,
    children,
    ...rest
}) => {
    return (
        <PanelLayout
            className={classNames(styles.Sidebar, className)}
            orientation="col"
            {...rest}>
            <div
                className={classNames(styles.Logo, isFull && styles.LogoFull)}
                title={organization}>
                <i>
                    <AppLogo />
                </i>

                {isFull && <span>{organization}</span>}
            </div>

            <ScrollLayout classNameContent={styles.Menu} orientation="col">
                {menu?.map((group, index) => (
                    <MenuGroup key={index} isFull={isFull} {...group} />
                ))}
            </ScrollLayout>
        </PanelLayout>
    );
};

export default memo(Sidebar);
