import {style} from 'typestyle';

const styles = {
    column: style({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'25px',
        padding:'0px 70px 0px 30px',
    }),
    row: style({
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-around',
        padding:'0px 20px 0px 20px',
        width:'70%',
        $nest: {
            '@media (max-width: 800px)': {
                width:'60%',
                padding:'0px',
                alignItems:'space-between',
            }
        }
    })
}

export default styles;