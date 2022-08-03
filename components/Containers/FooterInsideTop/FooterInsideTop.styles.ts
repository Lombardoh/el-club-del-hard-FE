import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '30px',
        gap: '40px',
        width: '626.67px',
        backgroundColor: '#636DD4',
        $nest: {
            '@media (max-width: 768px)': {
                width: '360px',
            }
        }
    })
}

export default styles;