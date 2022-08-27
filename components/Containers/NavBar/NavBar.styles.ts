import {style} from 'typestyle';

const styles = {
    container: style({
        width: '100%',
        minHeight: '20px',
        backgroundColor: '#6181BC',
        $nest: {
            '@media (max-width: 700px)': {
                overflow: 'hidden'
            }
        }
    }),
    nav: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '5px 20px',
        gap: '100px',
        $nest: {
            '@media (max-width: 700px)': {
                width: '80%',
                height: '100vh',
                background: '#ffffff',
                flexDirection: 'column',
                justifyContent: 'start',
                position: 'fixed',
                zIndex: 10,
                gap: '40px',
                transform: 'translateX(100vw)',
                transition: '0.5s ease-in-out',
                borderTop: '20px solid #6181BC',
                borderLeft: '10px solid #6181BC',
                borderBottom: '10px solid #6181BC',
                height:'100vh',
                justifyContent:'start',
                alignItems:'end',
                padding:'30px'
            }
        }
    }),
    open: style({
        $nest: {
            '@media (max-width: 800px)': {
                transform: 'translateX(30vw)',
                transition: '0.5s ease-in-out',
            }
        }
    }),
    link: style({
        $nest: {
            '@media screen and (max-width: 800px)': {
                width: '100%',
            }
        }
    }),
    text: style({
        display: 'flex',
        $nest: {
            '@media (min-width: 800px)': {
                display: "block",
                fontSize: "32px",
                fontFamily: '',
                fontWeight: "400",
                color: "#FFFFFF",
                padding: "10px",
            },
            '@media (max-width: 800px)': {
                fontSize: '32px',
                fontWeight:'500'
            },
            '@media (max-width: 600px)': {
                fontSize: '25px',
                fontWeight:'500'
            }
        }
    }),
}

export default styles;