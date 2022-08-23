import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        padding:'20px 30px',
        gap:'10px',
        width: '100%',
        border:'3px solid #63A8D4',
        borderRadius:'8px',
        $nest:{
            '@media (max-width: 1300px)': {
                flexDirection:'column',
                width: '75%',
                padding:'20px',
            },
            '@media (max-width: 600px)': {
                flexDirection:'column',
                width: '85%',
                padding:'20px 10px',
            },
        }
    })
}

export default styles;