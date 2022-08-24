import {style} from 'typestyle';

const styles = {
    column: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        width: '100%',
        marginTop:'-20px'
    }),
    smaller: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        width: '75%',
        $nest:{
            '@media (max-width: 1300px)': {
                width: '100%',
            },
        }
    }),
}

export default styles; 