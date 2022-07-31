import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        width: '100%',
        backgroundColor: '#636DD4',
        $nest: {
            '@media (max-width: 768px)': {
                flexDirection: 'column',
            }
        }
    })
}

export default styles;