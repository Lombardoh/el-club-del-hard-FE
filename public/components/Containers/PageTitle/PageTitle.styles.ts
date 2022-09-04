import {style} from 'typestyle';

const styles = {
    center: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px 10px',
        gap: '10px',
        width: '100%',
        height: '127px',
    }),
    left: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '40px 10px',
        marginRight: '260px',
        gap: '10px',
        width: '300px',
        height: '100px',
    })
}

export default styles;