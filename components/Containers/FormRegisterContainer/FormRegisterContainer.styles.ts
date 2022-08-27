import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
            $nest: {
                '@media (max-width: 768px)': {
                    width:'85%'
            }}
    }),
    errorMsg: style({
        marginLeft:'10px'
    })
}

export default styles;