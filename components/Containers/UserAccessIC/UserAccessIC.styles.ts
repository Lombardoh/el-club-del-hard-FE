import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '10px',
        gap: '10px',
        width: '100%',
    }),
    forMobile: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '10px 0px',
        gap: '0px',
        width: '100%',
        marginBottom:'-20px',
        $nest:{
            '@media (min-width: 1300px)': {
                flexDirection:'row',
            },
        }
    }),
}

export default styles;