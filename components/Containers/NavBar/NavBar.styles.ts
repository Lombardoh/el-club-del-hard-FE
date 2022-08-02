import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px 200px',
        gap: '50px',
        width: '100%',
        height: '80px',
        backgroundColor: '#6181BC',
        $nest:{
            '@media (max-width: 768px)': {
                height:'20px'
            },
        }
    })
}

export default styles;