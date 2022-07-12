/* react */
import { FC, memo } from 'react';
/* layouts */
import { PanelLayout } from 'shared/layouts';

const Accordion: FC = () => {
    return <PanelLayout orientation="col">Accordion</PanelLayout>;
};

export default memo(Accordion);
