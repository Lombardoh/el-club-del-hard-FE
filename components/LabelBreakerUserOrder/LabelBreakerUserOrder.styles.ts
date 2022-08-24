import {style} from 'typestyle';

const styles = {
    horizontalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",        
        margin: "0px", 
        width: "80%",
        height: "2px",
        background: "#63A8D4",
        borderRadius: "8px",
    }),
    verticalBreaker: style({
        margin: "20px",
        gap: "0px",
        width: "7px",
        height: "250px",
        background: "#63A8D4",
        borderRadius: "8px",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles; 