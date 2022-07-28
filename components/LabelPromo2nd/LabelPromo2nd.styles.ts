import {style} from 'typestyle';

const styles = {
    mostSold: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "137px",
        height: "40px",

        background: "#FF8F0F",
        borderRadius: "8px",
        color:"white",
    }),
    onSale: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "137px",
        height: "40px",

        background: "#14B24A",
        borderRadius: "8px",
        color:"white",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;