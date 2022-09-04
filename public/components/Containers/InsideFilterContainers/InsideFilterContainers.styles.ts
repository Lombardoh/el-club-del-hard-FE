import {style} from 'typestyle';

const styles = {
    outer: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '100%',
    }),
    insider: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: '10px',
        width: '100%',
    })
}

export default styles;