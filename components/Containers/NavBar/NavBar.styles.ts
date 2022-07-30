import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px 200px',
        gap: '100px',
        width: '100%',
        minHeight: '20px',
        backgroundColor: '#6181BC',
        $nest: {
            '@media screen and (max-width: 600px)': {
                padding: '10px 20px',
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
        fontSize: "32px",
        fontFamily: '',
        fontWeight: "400",
        color: "#FFFFFF",
        textAlign: "center",
        minWidth: "100px",
        $nest: {
            '@media screen and (max-width: 600px)': {
                fontSize: '24px',
            }
        }
    })
}

export default styles;