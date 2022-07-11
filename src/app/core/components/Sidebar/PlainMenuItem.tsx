/* react */
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
/* props */
import { PlainMenuItemProps } from './Sidebar.props';
/* utils */
import { classNames } from 'shared/utils';
/* styles */
import styles from './PlainMenuItem.module.scss';

const PlainMenuItem: FC<PlainMenuItemProps> = ({ icon, label, to, isFull }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(
                    styles.Menu,
                    isFull && styles.Full,
                    isActive && styles.Active
                )
            }
            title={label}>
            <i>{icon}</i>

            {isFull && <span>{label}</span>}
        </NavLink>
    );
};

export default memo(PlainMenuItem);
