import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        $nest:{
            '@media (min-width: 900px)': { 
                width: '626.67px',
            },
        }
    }),
    errorMsg: style({
        color:'red',
        marginLeft:'10px'
    })
}

export default styles;