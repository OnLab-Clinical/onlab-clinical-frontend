/* react */
import { FC, memo } from 'react';
/* props */
import { MenuGroupProps, PlainMenuItemProps } from './Sidebar.props';
/* components */
import { ComponentStrategy } from 'shared/components';
import PlainMenuItem from './PlainMenuItem';
/* types */
import { MenuType } from 'app/types';
/* styles */
import styles from './MenuGroup.module.scss';

const components: Record<MenuType, FC<PlainMenuItemProps>> = {
    plain: PlainMenuItem,
    dropdown: PlainMenuItem,
};

const MenuItemStrategy = ComponentStrategy<PlainMenuItemProps, MenuType>({
    components,
    Default: PlainMenuItem,
});

const MenuGroup: FC<MenuGroupProps> = ({ label, items, isFull, ...rest }) => {
    return (
        <div className={styles.Group} {...rest}>
            {isFull && <span title={label}>{label}</span>}

            <nav>
                {items.map((item, index) => (
                    <MenuItemStrategy
                        key={index}
                        strategy={item.type}
                        to=""
                        isFull={isFull}
                        {...item}
                    />
                ))}
            </nav>
        </div>
    );
};

export default memo(MenuGroup);
