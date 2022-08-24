import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection:'column',
        alignItems:'flex-end',
        padding: '75px',
        width: '100%',
        gap:'40px',
        $nest:{
            '@media (max-width: 1300px)': {
                padding: '50px 0px',
                alignItems:'center',
            },
        }
    })
}

export default styles;