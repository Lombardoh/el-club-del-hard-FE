import {style} from 'typestyle';

const styles = {
    carousel: style({
        overflow: 'hidden',
        width: '100%',
    }),
    inner: style({
        whiteSpace: 'nowrap',
    }),
    controls: style({
        display: 'flex',
        justifyContent: 'center',
    }),
}

export default styles;