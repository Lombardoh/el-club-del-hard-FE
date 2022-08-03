import {style} from 'typestyle';

const styles = {
    hamburgerMenu: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 0px",
        gap: "10px",
        width: "60px",
        height: "60px",
        background: "inherit",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            },
            '@media (max-width: 600px)':{
                width: '40px',
            }
        }
    })
}

export default styles;