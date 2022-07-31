import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',   
        alignItems: 'center',
        padding: '10px',
        gap: '30px',
        width: '300px',
        height: '500px',
        backgroundColor: '#FFFFF',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        borderRadius: '8px',
        $nest: {
            '@media (max-width: 768px)': {
                width: '165px',
                height: '410px',
            }
        }
    })
}

export default styles;