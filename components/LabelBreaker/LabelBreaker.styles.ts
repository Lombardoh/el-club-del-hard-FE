import {style} from 'typestyle';

const styles = {
    horizontalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",        
        margin: "50px auto 20px auto", 
        width: "80%",
        height: "5px",
        background: "#63A8D4",
        borderRadius: "8px",
        $nest: {
            '@media (max-width: 768px)': {
                width: "95%",
                margin: "auto",
                marginTop: "50px",
            }
        }
    }),
    verticalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        margin: "20px",
        gap: "0px",

        width: "5px",
        height: "600px",

        background: "#63A8D4",
        borderRadius: "8px",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;