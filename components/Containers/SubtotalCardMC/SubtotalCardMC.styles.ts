import {style} from 'typestyle';

const styles = {
    container: style({
        display:'flex',
        justifyContent:'center',
        height:'450px',
        width:'450px',
        $nest: {
            '@media (max-width: 600px)': {
                width:'100%'
            }
        }

        
    }),
}

export default styles;