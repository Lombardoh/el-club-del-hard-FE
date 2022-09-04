import {style} from 'typestyle';

const styles = {
    horizontalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",        
        margin: "30px auto 10px auto", 
        width: "80%",
        height: "5px",
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