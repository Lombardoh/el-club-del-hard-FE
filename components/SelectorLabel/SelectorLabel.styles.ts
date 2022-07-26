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
                outline: 'none',
            }
        }
    })
}

export default styles;