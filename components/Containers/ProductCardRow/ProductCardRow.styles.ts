import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        width: '100%',
        height: '60px',
        backgroundColor: '#FFFFFF',
    }),
    noPromo: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        width: '100%',
        height: '60px',
        backgroundColor: '#FFFFFF',
    }),
}

export default styles;