import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
        width: '100%',
        height: '60px',
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;