import {style} from 'typestyle';

const styles = {
    input: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '45px',
        border: '1px solid #63A8D4',
        borderRadius: '8px',
        backgroundColor: '#F5F5F5',
        padding:'10px',
        fontSize:'16px',
        $nest:{
            '&:focus':{
                border: '5px solid #63A8D4',
                outline: 'none',
            }
        }
    }),
    file: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '45px',
        border: '1px solid #63A8D4',
        borderRadius: '8px',
        backgroundColor: '#F5F5F5',
        padding:'10px',
        fontSize:'16px',
    }),
    textarea: style({
        width: '100%',
        height: '100px',
        border: '1px solid #63A8D4',
        borderRadius: '8px',
        backgroundColor: '#F5F5F5',
        padding:'10px',
        fontSize:'16px',
        
        $nest:{
            '&:focus':{
                border: '5px solid #63A8D4',
                outline: 'none',
            }
        }
    }),
}

export default styles;