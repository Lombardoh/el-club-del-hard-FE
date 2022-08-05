import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px 20px',
        gap: '10px',
        width: '100%',
        backgroundColor: '#636DD4',
        $nest: {
            '@media (min-width: 900px)': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
        }
    })
}

export default styles;