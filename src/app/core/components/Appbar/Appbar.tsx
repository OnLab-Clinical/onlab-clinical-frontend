/* react */
import { FC, memo } from 'react';
/* props */
import { AppbarProps } from './Appbar.props';
/* components */
import { Button } from 'shared/components';
/* utils */
import { classNames } from 'shared/utils';
/* assets */
import { MdArrowBack, MdMenu } from 'react-icons/md';
/* styles */
import styles from './Appbar.module.scss';

const Appbar: FC<AppbarProps> = ({
    isBackVisible,
    onBackClick,
    onMenuClick,
}) => {
    return (
        <div className={styles.Appbar}>
            <Button
                className={classNames(
                    styles.Back,
                    !isBackVisible && styles.BackHide
                )}
                onClick={onBackClick}>
                <i>
                    <MdArrowBack />
                </i>
            </Button>

            <Button className={styles.Logo}>
                <span>OnLab-Clinical</span>
            </Button>

            <Button className={styles.Menu} onClick={onMenuClick}>
                <i>
                    <MdMenu />
                </i>
            </Button>
        </div>
    );
};

export default memo(Appbar);
