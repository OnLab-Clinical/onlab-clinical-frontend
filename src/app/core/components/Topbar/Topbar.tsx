/* react */
import { FC, memo } from 'react';
/* props */
import { TopbarProps } from './Topbar.props';
/* hooks */
import { useActive } from 'shared/hooks';
/* layouts */
import { DropLayout } from 'shared/layouts';
/* components */
import { Button } from 'shared/components';
import DropMenu from './DropMenu';
/* utils */
import { classNames } from 'shared/utils';
/* assets */
import { MdMenu } from 'react-icons/md';
import { AppLogoSrc } from 'assets';
/* styles */
import styles from './Topbar.module.scss';

const Topbar: FC<TopbarProps> = ({ className, ...rest }) => {
    const [isDrop, openDrop, closeDrop] = useActive();

    return (
        <div className={classNames(styles.Topbar, className)} {...rest}>
            <Button className={styles.Menu}>
                <i>
                    <MdMenu />
                </i>
            </Button>

            <DropLayout
                anchorRow="end"
                anchorCol="start"
                dropRow="end"
                dropCol="start"
                isDrop={isDrop}
                drop={<DropMenu onCloseDropMenu={closeDrop} />}>
                <Button className={styles.Drop} onClick={openDrop}>
                    <img src={AppLogoSrc} alt="logo" />
                </Button>
            </DropLayout>
        </div>
    );
};

export default memo(Topbar);
