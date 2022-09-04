import {style} from 'typestyle';

const styles = {
    onStock: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "137px",
        height: "40px",

        background: "#29A8B5",
        borderRadius: "8px",
        color:"white",
    }),
    noStock: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "137px",
        height: "40px",

        background: "#CC3721",
        borderRadius: "8px",
        color:"white",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;