/* react */
import { FC, memo } from 'react';
/* props */
import { TopbarProps } from './Topbar.props';
/* components */
import { Button } from 'shared/components';
/* utils */
import { classNames } from 'shared/utils';
/* assets */
import { MdMenu } from 'react-icons/md';
/* styles */
import styles from './Topbar.module.scss';

const Topbar: FC<TopbarProps> = ({ className, ...rest }) => {
    return (
        <div className={classNames(styles.Topbar, className)} {...rest}>
            <Button className={styles.Menu}>
                <i>
                    <MdMenu />
                </i>
            </Button>
        </div>
    );
};

export default memo(Topbar);
