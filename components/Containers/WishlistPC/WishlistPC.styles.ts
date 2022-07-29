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
        gap:'50px',
        padding:'0px 20px 0px 20px',
    })
}

export default styles;