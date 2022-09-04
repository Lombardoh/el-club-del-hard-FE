import {style} from 'typestyle';

const styles = {
    column: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        width: '260px',
    }),
    row: style({
        display: 'flex',
        width:'100%',
        padding:'0px 50px 100px',
        gap:'50px',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        $nest: {
            '@media (max-width: 800px)': {
                flexDirection:'column',
                alignItems:'center'
            }
        }
    }),
}

export default styles;