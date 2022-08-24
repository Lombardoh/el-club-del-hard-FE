import {style} from 'typestyle';

const styles = {
    row: style({
        display: 'flex',
        flexDirection:'row',
        justifyContent: '',
        alignItems:'center',
        padding:'20px 0px',
        gap:'10px',
        width: '100%',
        border:'3px solid rgba(99, 168, 212, 0.7)',
        borderRadius:'8px',
    }),
    column: style({
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        padding:'20px 30px',
        gap:'10px',
        width: '100%',
        border:'3px solid #63A8D4',
        borderRadius:'8px',
    })
}

export default styles; 