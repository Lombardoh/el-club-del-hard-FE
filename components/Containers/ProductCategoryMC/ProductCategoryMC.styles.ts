import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        flexWrap:'wrap',
        padding:'0px 50px',
        gap:'15px',
        $nest: {
            '@media (min-width: 768px)': {
                padding: "0 70px",
                gap:'30px',
            },
            '@media (min-width: 1200px)': {
                padding: "0 65px",
            },
            '@media (min-width: 1350px)': {
                padding: "0 145px",
            },
            '@media (min-width: 1920px)': {
                padding: "0 140px",
            }
        }
    })
}

export default styles;