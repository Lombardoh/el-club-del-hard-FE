import {style} from 'typestyle';

const styles = {
    cart: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        background: "inherit",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;