/* react */
import { FC, memo } from 'react';
/* props */
import { AppbarProps } from './Appbar.props';
/* components */
import { Button } from 'shared/components';
/* assets */
import { MdArrowBack, MdMenu } from 'react-icons/md';
/* styles */
import styles from './Appbar.module.scss';

const Appbar: FC<AppbarProps> = () => {
    return (
        <div className={styles.Appbar}>
            <Button className={styles.Back}>
                <i>
                    <MdArrowBack />
                </i>
            </Button>

            <Button className={styles.Logo}>
                <span>OnLab-Clinical</span>
            </Button>

            <Button className={styles.Menu}>
                <i>
                    <MdMenu />
                </i>
            </Button>
        </div>
    );
};

export default memo(Appbar);
