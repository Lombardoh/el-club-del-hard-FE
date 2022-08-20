import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '5px 20px',
        gap: '100px',
        width: '100%',
        minHeight: '20px',
        backgroundColor: '#6181BC',
        $nest: {
            '@media (max-width: 700px)': {
                gap: '40px',
            }
        }
    }),
    link: style({
        $nest: {
            '@media screen and (max-width: 600px)': {
                width: '100%',
            }
        }
    }),
    text: style({
        display: "none",
        $nest: {
            '@media (min-width: 501px)': {
                display: "block",
                fontSize: "24px",
                fontFamily: '',
                fontWeight: "400",
                color: "#FFFFFF",
                padding: "10px",
            },
            '@media (min-width: 600px)': {
                fontSize: '32px',
            }
        }
    }),
}

export default styles;