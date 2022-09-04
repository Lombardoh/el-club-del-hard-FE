import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '20px 30px',
        gap: '10px',
        width: '580px',
        border: '3px solid #63A8D4',
        borderRadius: '8px',
        boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.15)',
        $nest: {
            '@media (max-width: 768px)': {
                width:'100%',
        }}
    })
}

export default styles;