import {style} from 'typestyle';

const styles = {
    buttonNumericPageBrowsing: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "40px",
        height: "40px",

        background: "#63A8D4",
        borderRadius: "50px"
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;