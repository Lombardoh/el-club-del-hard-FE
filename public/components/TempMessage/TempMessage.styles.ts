import {style} from 'typestyle';

const styles = {
    message: style({
        display: "flex",
        position: "fixed",
        background: '#4BB543',
        borderRadius: '15px',
        padding: '10px 10px',
        bottom: 50,
        right: 50
    }),
    error: style({
        background: '#E53935',
    })
}

export default styles;