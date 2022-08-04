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
        backgroundColor: '#FFFFFF',
        $nest:{
            '@media (max-width: 1370px)': {
                justifyContent:'center'
            },
        }

    }),
    noPromo: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        width: '100%',
        backgroundColor: '#FFFFFF',
        $nest:{
            '@media (max-width: 1370px)': {
                justifyContent:'center'
            },
        }
    }),
    lastRow: style({
        display: 'flex',
        flexDirection: 'row',
        $nest:{
            '@media (max-width: 790px)': {
                flexDirection: 'column',
            },
        }
    }),
}

export default styles;