import {style} from 'typestyle';

const styles = {
    container: style({
        display:'flex',
        flexDirection:'row',
        gap:'20px',
        justifyContent:'center',
        alignItems:'center',
        padding:'10px',
        height:'100%',
        $nest: {
        '@media (max-width: 800px)': {
            gap:'10px'
            }
        }
    })
}

export default styles;